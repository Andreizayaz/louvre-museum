import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperControls } from './SwiperControls';

import { pictures } from 'src/components/sections/visiting/data';

import { SLIDER_GRADIENT } from 'src/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperSlider.scss';
import { useSelector } from 'react-redux';
import { selectCurrentLanguage } from 'src/store/Language';

const SwiperSlider: FC = (): ReactElement => {
  const [t] = useTranslation('translation', {
    keyPrefix: 'welcome_section.pictures'
  });

  const { dir } = useSelector(selectCurrentLanguage);

  const fractionRef = useRef(null);

  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  useEffect(() => {
    if (swiper) {
      swiper.rtlTranslate = dir === 'rtl';
    }
  }, [swiper, dir]);

  return (
    <>
      <Swiper
        onSwiper={(swiper: SwiperInstance) => {
          console.log('init');
          setSwiper(swiper);
          const fractionsBlock = document.querySelector('.controls__fraction');
          if (fractionsBlock) {
            fractionsBlock.innerHTML = `<span class="fraction__current">01</span>|<span class="fraction__total">${
              pictures.length < 10
                ? '0' + pictures.length.toString()
                : pictures.length
            }</span>`;
          }
        }}
        className='swiper'
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: 'pagination__bullet',
          bulletActiveClass: 'pagination__bullet_active',
          el: '.controls__pagination',
          renderBullet: (index, className) => {
            return `<span class=${className}></span>`;
          },
          renderFraction: (currentClass, totalClass) => {
            return `<span class=${currentClass}></span>|
              <span class=${totalClass}></span>`;
          }
        }}
        onSlideChange={(Swiper) => {
          if (fractionRef.current) {
            const fragment: HTMLElement = fractionRef.current;
            let current = Swiper.realIndex + 1;
            const totalSlide = pictures.length;
            if (current > totalSlide) current = 1;
            const currSlide = current < 10 ? `0${current}` : current;
            const totalSlides = totalSlide < 10 ? `0${totalSlide}` : totalSlide;
            fragment.innerHTML = `<span class="fraction__current">${currSlide}</span>|<span class="fraction__total">${totalSlides}</span>`;
          }
        }}
        navigation={{ prevEl: '.direction__prev', nextEl: '.direction__next' }}
        modules={[Pagination, Navigation, Autoplay]}
        grabCursor={true}
        style={{ height: '750px', width: '100%' }}
        autoplay={{ delay: 1000 }}
        speed={1500}
      >
        {pictures.map(({ src, translationKey }, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `${SLIDER_GRADIENT}, url(${src})`,
                backgroundRepeat: 'no-repeat'
              }}
              title={t(translationKey)}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperControls refElem={fractionRef} />
    </>
  );
};

export default SwiperSlider;

SwiperSlider.displayName = 'SwiperSlider';

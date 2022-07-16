import { Dispatch, FC, ReactElement, SetStateAction, useRef } from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperControls } from './SwiperControls';

import { SLIDER_GRADIENT } from 'src/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperSlider.scss';
import { DataForSliderType, PaginationOptionsType } from '../types';

type SwiperSliderPropsTypes = {
  dataForSlider: DataForSliderType[];
  manageSwiperState: Dispatch<SetStateAction<SwiperInstance | null>>;
  fractionControlSelector?: string;
  paginationOptions: PaginationOptionsType;
  isFraction: boolean;
};

const SwiperSlider: FC<SwiperSliderPropsTypes> = ({
  dataForSlider,
  manageSwiperState,
  fractionControlSelector,
  paginationOptions,
  isFraction
}): ReactElement => {
  const fractionRef = useRef(null);

  return (
    <>
      <Swiper
        onSwiper={(swiper: SwiperInstance) => {
          manageSwiperState(swiper);
          const fractionsBlock = fractionControlSelector
            ? document.querySelector(fractionControlSelector)
            : '';
          if (fractionsBlock) {
            fractionsBlock.innerHTML = `<span class="fraction__current">01</span>|<span class="fraction__total">${
              dataForSlider.length < 10
                ? '0' + dataForSlider.length.toString()
                : dataForSlider.length
            }</span>`;
          }
        }}
        className='swiper'
        slidesPerView={1}
        loop={true}
        pagination={{
          ...paginationOptions
        }}
        onSlideChange={(Swiper) => {
          if (fractionRef.current && isFraction) {
            const fragment: HTMLElement = fractionRef.current;
            let current = Swiper.realIndex + 1;
            const totalSlide = dataForSlider.length;
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
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        speed={1500}
      >
        {dataForSlider.map(({ src, text }, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `${SLIDER_GRADIENT}, url(${src})`,
                backgroundRepeat: 'no-repeat'
              }}
              title={text}
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

import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SwiperControls } from 'src/components/common';

import { COMMON_SWIPER_HEIGHT } from 'src/constants';

import { DataForSliderType, PaginationOptionsType } from '../types';
import { getAdapTiveSlideBgSize, getAdapTiveSwiperHeight } from './helpers';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperSlider.scss';

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
  const [bgSize, setBgSize] = useState('initial');
  const [swiperHeight, setSwiperHeight] = useState(COMMON_SWIPER_HEIGHT);
  const fractionRef = useRef(null);

  const sliderControlsClasses = {
    swiperControls: 'swiper__controls controls',
    fractionClasses: 'controls__fraction',
    paginationClasses: 'controls__pagination',
    directionClasses: 'controls__direction direction',
    prevDirectionClasses: 'direction__prev',
    nextDirectionClasses: 'direction__next'
  };

  useEffect(() => {
    setBgSize(getAdapTiveSlideBgSize(window.innerWidth));
    setSwiperHeight(getAdapTiveSwiperHeight(window.innerWidth));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setBgSize(getAdapTiveSlideBgSize(window.innerWidth));
      setSwiperHeight(getAdapTiveSwiperHeight(window.innerWidth));
    });

    () =>
      window.removeEventListener('resize', () => {
        setBgSize(getAdapTiveSlideBgSize(window.innerWidth));
        setSwiperHeight(getAdapTiveSwiperHeight(window.innerWidth));
      });
  }, [bgSize, swiperHeight]);

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
        style={{ height: swiperHeight, width: '100%' }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1500}
        spaceBetween={0}
      >
        {dataForSlider.map(({ src, text }, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: bgSize
              }}
              title={text}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperControls
        refElem={fractionRef}
        isFraction={true}
        swiperControlsClasses={sliderControlsClasses}
      />
    </>
  );
};

export default SwiperSlider;

SwiperSlider.displayName = 'SwiperSlider';

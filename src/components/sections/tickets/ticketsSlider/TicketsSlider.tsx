import { Dispatch, FC, ReactElement, SetStateAction } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance, Autoplay } from 'swiper';

import { picturesType } from '../types';

import 'swiper/css';
import './TicketsSlider.scss';

type TicketsSliderPropsTypes = {
  pictures: picturesType[];
  manageSwiperState: Dispatch<SetStateAction<SwiperInstance | null>>;
};

export const TicketsSlider: FC<TicketsSliderPropsTypes> = ({
  pictures,
  manageSwiperState
}): ReactElement => (
  <div className='ticket-swiper'>
    <Swiper
      onSwiper={(swiper: SwiperInstance) => {
        manageSwiperState(swiper);
      }}
      slidesPerView={1}
      autoplay={{
        delay: 1000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
      }}
      speed={2000}
      loop={true}
      grabCursor={true}
      modules={[Autoplay]}
    >
      {pictures.map(({ title, imgSrc }) => (
        <SwiperSlide key={title}>
          <img src={imgSrc} alt={title} title={title} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

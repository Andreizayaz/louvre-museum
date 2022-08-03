import { FC, ReactElement } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import { picturesType } from '../types';

import 'swiper/css';
import './TicketsSlider.scss';

type TicketsSliderPropsTypes = {
  pictures: picturesType[];
};

export const TicketsSlider: FC<TicketsSliderPropsTypes> = ({
  pictures
}): ReactElement => (
  <div className='ticket-swiper'>
    <Swiper
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

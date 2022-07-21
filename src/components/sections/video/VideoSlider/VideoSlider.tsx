import { FC, ReactElement, useState } from 'react';

import { FreeMode, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { videoData } from '../data';

import { SwiperControls } from 'src/components/common';
import { VidePlayer } from '../VideoPlayer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './VideoSlider.scss';

export const VideoSlider: FC = (): ReactElement => {
  const [videoIndexActive, setVideoIndexActive] = useState(0);

  const paginationOptions = {
    clickable: true,
    bulletClass: 'bottom-pagination__bullet',
    bulletActiveClass: 'bottom-pagination__bullet_active',
    el: '.bottom-slider-controls__bottom-pagination',
    renderBullet: (index: number, className: string) => {
      return `<span class=${className}></span>`;
    }
  };

  const sliderControlsClasses = {
    swiperControls: 'bottom-slider__controls bottom-slider-controls',
    paginationClasses: 'bottom-slider-controls__bottom-pagination',
    directionClasses: 'bottom-slider-controls__direction bottom-direction',
    prevDirectionClasses: 'bottom-direction__prev',
    nextDirectionClasses: 'bottom-direction__next'
  };

  return (
    <div className='video-block'>
      <div className='video-block__top-slider'>
        {videoData
          .filter(({ id }) => id === videoIndexActive)
          .map(({ id, srcVideo, posterVideo }) => (
            <VidePlayer
              key={id}
              srcVideo={srcVideo}
              posterVideo={posterVideo}
              height='650px'
              width='100%'
            />
          ))}
      </div>
      <div className='video-block__bottom-slider bottom-slider'>
        <Swiper
          onSlideChange={(Swiper) => {
            console.log(Swiper.realIndex);
            setVideoIndexActive(Swiper.realIndex);
          }}
          style={{ position: 'relative' }}
          loop={true}
          spaceBetween={42}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Pagination]}
          navigation={{
            prevEl: '.bottom-direction__prev',
            nextEl: '.bottom-direction__next'
          }}
          pagination={{ ...paginationOptions }}
        >
          {videoData.map(({ iframeSrc }, index) => (
            <SwiperSlide key={index}>
              <iframe
                width='100%'
                height='254'
                src={iframeSrc}
                title='YouTube video player'
                loading='lazy'
                frameBorder={0}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen={true}
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='bottom-slider-controls__wrapper'>
          <SwiperControls
            isFraction={false}
            swiperControlsClasses={sliderControlsClasses}
          />
        </div>
      </div>
    </div>
  );
};

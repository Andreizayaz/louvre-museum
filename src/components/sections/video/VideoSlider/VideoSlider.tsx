import { FC, ReactElement, useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Navigation, Pagination } from 'swiper';
import { Swiper as SwiperInstance } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { selectCurrentLanguage } from 'src/store/Language';
import {
  COMMON_VIDEO_IFRAME_HEIGHT,
  COMMON_VIDEO_PLAYER_HEIGHT,
  COMMON_VIDEO_SLIDES_COUNT,
  COMMON_VIDEO_SLIDES_SPACE,
  RIGHT_TO_LEFT
} from 'src/constants';

import { videoData } from '../data';

import { SwiperControls } from 'src/components/common';
import { VideoPlayer } from '../VideoPlayer';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './VideoSlider.scss';
import {
  getAdapTiveVideoIframeHeight,
  getAdapTiveVideoPlayerHeight,
  getCountVideoSlidesPerView,
  getVideoSlidesSpace
} from './helpers';

export const VideoSlider: FC = (): ReactElement => {
  const { dir } = useSelector(selectCurrentLanguage);
  const [videoIndexActive, setVideoIndexActive] = useState(0);
  const [videoPlayerHeight, setVideoPlayerHeight] = useState(
    COMMON_VIDEO_PLAYER_HEIGHT
  );
  const [videoIframeHeight, setVideoIframeHeight] = useState(
    COMMON_VIDEO_IFRAME_HEIGHT
  );
  const [videoSlidesPerView, setVideoSlidesPerView] = useState(
    COMMON_VIDEO_SLIDES_COUNT
  );
  const [videoSlidesSpace, setVideoSlidesSpace] = useState(
    COMMON_VIDEO_SLIDES_SPACE
  );
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const videoRef = useRef<HTMLDivElement>(null);

  const changeVideoHeightHandler = () => {
    const { innerWidth } = window;
    setVideoPlayerHeight(getAdapTiveVideoPlayerHeight(innerWidth));
    setVideoIframeHeight(getAdapTiveVideoIframeHeight(innerWidth));
    setVideoSlidesPerView(getCountVideoSlidesPerView(innerWidth));
    setVideoSlidesSpace(getVideoSlidesSpace(innerWidth));
  };

  useEffect(() => {
    changeVideoHeightHandler();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', changeVideoHeightHandler);

    () => window.removeEventListener('resize', changeVideoHeightHandler);
  }, [videoPlayerHeight]);

  useEffect(() => {
    if (swiper) {
      swiper.rtlTranslate = dir === RIGHT_TO_LEFT;
    }
  }, [swiper, dir]);

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

  useEffect(() => {
    const youtybeIframes: NodeListOf<HTMLIFrameElement> =
      document.querySelectorAll('.youtube-iframe');

    youtybeIframes.forEach((item) => {
      const iframe = item.contentDocument?.querySelector(
        '.ytp-large-play-button.ytp-button.ytp-large-play-button-red-bg'
      );
      iframe?.classList.add('youtube-iframe__btn');
    });
  }, []);

  return (
    <div className='video-block'>
      <div ref={videoRef} className='video-block__top-slider'>
        {videoData
          .filter(({ id }) => id === videoIndexActive)
          .map(({ id, srcVideo, posterVideo }) => (
            <VideoPlayer
              key={id}
              srcVideo={srcVideo}
              posterVideo={posterVideo}
              height={`${videoPlayerHeight}px`}
              width='100%'
              videoRef={videoRef}
            />
          ))}
      </div>
      <div className='video-block__bottom-slider bottom-slider'>
        <Swiper
          onSwiper={(swiper: SwiperInstance) => {
            setSwiper(swiper);
          }}
          onSlideChange={(Swiper) => {
            setVideoIndexActive(Swiper.realIndex);
          }}
          style={{ position: 'relative' }}
          loop={true}
          spaceBetween={videoSlidesSpace}
          slidesPerView={videoSlidesPerView}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: '.bottom-direction__prev',
            nextEl: '.bottom-direction__next'
          }}
          pagination={{ ...paginationOptions }}
        >
          {videoData.map(({ iframeSrc }, index) => (
            <SwiperSlide key={index}>
              <iframe
                className='youtube-iframe'
                width='100%'
                height={videoIframeHeight}
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

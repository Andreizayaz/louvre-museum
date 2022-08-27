import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useState
} from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInstance, Autoplay } from 'swiper';

import { picturesType } from '../types';

import 'swiper/css';
import './TicketsSlider.scss';
import { MOBILE_SIZE } from 'src/constants';

type TicketsSliderPropsTypes = {
  pictures: picturesType[];
  manageSwiperState: Dispatch<SetStateAction<SwiperInstance | null>>;
};

export const TicketsSlider: FC<TicketsSliderPropsTypes> = ({
  pictures,
  manageSwiperState
}): ReactElement => {
  const [isMobileSize, setIsMobileSize] = useState(false);

  const isBackgroundImage = () => {
    if (window.innerWidth <= MOBILE_SIZE) {
      setIsMobileSize(true);
      return;
    }

    setIsMobileSize(false);
  };

  useEffect(() => {
    isBackgroundImage();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', isBackgroundImage);

    return () => window.removeEventListener('resize', isBackgroundImage);
  }, [isMobileSize]);

  return (
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
          <SwiperSlide
            key={title}
            style={{
              backgroundImage: isMobileSize ? `url(${imgSrc})` : 'none',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            {!isMobileSize && <img src={imgSrc} alt={title} title={title} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

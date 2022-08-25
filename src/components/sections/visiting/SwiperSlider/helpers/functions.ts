import {
  LAPTOP_SIZE,
  TABLET_SIZE,
  MOBILE_SIZE,
  COMMON_SWIPER_HEIGHT,
  LAPTOP_SWIPER_HEIGHT,
  TABLET_SWIPER_HEIGHT,
  MOBILE_SWIPER_HEIGHT
} from 'src/constants';

export const getAdapTiveSlideBgSize = (screenWidth: number): string => {
  if (screenWidth <= LAPTOP_SIZE && screenWidth > TABLET_SIZE) {
    return 'cover';
  }

  if (screenWidth <= TABLET_SIZE) {
    return 'cover';
  }

  return 'initial';
};

export const getAdapTiveSwiperHeight = (screenWidth: number): number => {
  if (screenWidth <= LAPTOP_SIZE && screenWidth > TABLET_SIZE) {
    return LAPTOP_SWIPER_HEIGHT;
  }

  if (screenWidth <= TABLET_SIZE && screenWidth > MOBILE_SIZE) {
    return TABLET_SWIPER_HEIGHT - screenWidth * 0.01;
  }

  if (screenWidth <= MOBILE_SIZE) {
    return MOBILE_SWIPER_HEIGHT - screenWidth * 0.01;
  }

  return COMMON_SWIPER_HEIGHT;
};

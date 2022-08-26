import {
  LAPTOP_SIZE,
  TABLET_SIZE,
  MOBILE_SIZE,
  COMMON_VIDEO_PLAYER_HEIGHT,
  LAPTOP_VIDEO_PLAYER_HEIGHT,
  TABLET_VIDEO_PLAYER_HEIGHT,
  MOBILE_VIDEO_PLAYER_HEIGHT,
  LAPTOP_VIDEO_IFRAME_HEIGHT,
  TABLET_VIDEO_IFRAME_HEIGHT,
  MOBILE_VIDEO_IFRAME_HEIGHT,
  COMMON_VIDEO_IFRAME_HEIGHT,
  TABLET_VIDEO_SLIDES_COUNT,
  COMMON_VIDEO_SLIDES_COUNT,
  TABLET_VIDEO_SLIDES_SPACE,
  COMMON_VIDEO_SLIDES_SPACE
} from 'src/constants';

export const getAdapTiveVideoPlayerHeight = (screenWidth: number): number => {
  if (screenWidth <= LAPTOP_SIZE && screenWidth > TABLET_SIZE) {
    return LAPTOP_VIDEO_PLAYER_HEIGHT;
  }

  if (screenWidth <= TABLET_SIZE && screenWidth > MOBILE_SIZE) {
    return screenWidth === TABLET_SIZE
      ? TABLET_VIDEO_PLAYER_HEIGHT
      : TABLET_VIDEO_PLAYER_HEIGHT - screenWidth * 0.01;
  }

  if (screenWidth <= MOBILE_SIZE) {
    return screenWidth === MOBILE_SIZE
      ? MOBILE_VIDEO_PLAYER_HEIGHT
      : MOBILE_VIDEO_PLAYER_HEIGHT - screenWidth * 0.01;
  }

  return COMMON_VIDEO_PLAYER_HEIGHT;
};

export const getAdapTiveVideoIframeHeight = (screenWidth: number): number => {
  if (screenWidth <= LAPTOP_SIZE && screenWidth > TABLET_SIZE) {
    return LAPTOP_VIDEO_IFRAME_HEIGHT;
  }

  if (screenWidth <= TABLET_SIZE && screenWidth > MOBILE_SIZE) {
    return screenWidth === TABLET_SIZE
      ? TABLET_VIDEO_IFRAME_HEIGHT
      : TABLET_VIDEO_IFRAME_HEIGHT - screenWidth * 0.01;
  }

  if (screenWidth <= MOBILE_SIZE) {
    return screenWidth === MOBILE_SIZE
      ? MOBILE_VIDEO_IFRAME_HEIGHT
      : MOBILE_VIDEO_IFRAME_HEIGHT - screenWidth * 0.01;
  }

  return COMMON_VIDEO_IFRAME_HEIGHT;
};

export const getCountVideoSlidesPerView = (screenWidth: number): number => {
  if (screenWidth <= TABLET_SIZE) {
    return TABLET_VIDEO_SLIDES_COUNT;
  }

  return COMMON_VIDEO_SLIDES_COUNT;
};

export const getVideoSlidesSpace = (screenWidth: number): number => {
  if (screenWidth <= TABLET_SIZE) {
    return TABLET_VIDEO_SLIDES_SPACE;
  }

  return COMMON_VIDEO_SLIDES_SPACE;
};

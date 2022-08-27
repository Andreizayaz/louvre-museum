import { LAPTOP_SIZE, MOBILE_SIZE, TABLET_SIZE } from 'src/constants';
import { map_1920, map_1024, map_768, map_420 } from '../img';

export const getMapBackgroundImg = (innerWidth: number): string => {
  if (innerWidth <= MOBILE_SIZE) {
    return map_420;
  }
  if (innerWidth <= TABLET_SIZE) {
    return map_768;
  }
  if (innerWidth <= LAPTOP_SIZE) {
    return map_1024;
  }

  return map_1920;
};

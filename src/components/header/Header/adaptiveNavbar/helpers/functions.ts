import { LAPTOP_SIZE, RIGHT_TO_LEFT } from 'src/constants';

export const getTranslateDistance = (
  langDir: string,
  innerWidth: number
): string => {
  if (innerWidth <= LAPTOP_SIZE && langDir === RIGHT_TO_LEFT) {
    return 'translateX(1000%)';
  }

  if (innerWidth <= LAPTOP_SIZE && langDir !== RIGHT_TO_LEFT) {
    return 'translateX(-1000%)';
  }

  return 'none';
};

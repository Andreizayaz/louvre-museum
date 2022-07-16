export type PictureType = {
  src: string;
  translationKey: string;
};

export type DataForSliderType = {
  src: string;
  text: string;
};

export type PaginationOptionsType = {
  clickable: boolean;
  bulletClass: string;
  bulletActiveClass: string;
  el: string;
  renderBullet: (index: number, className: string) => string;
  renderFraction: (currentClass: string, totalClass: string) => string;
};

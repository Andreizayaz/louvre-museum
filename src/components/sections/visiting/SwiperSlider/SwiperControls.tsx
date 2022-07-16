import { FC, MutableRefObject, ReactElement } from 'react';

type SwiperControlsPropsTypes = {
  refElem: MutableRefObject<null>;
};

export const SwiperControls: FC<SwiperControlsPropsTypes> = ({
  refElem
}): ReactElement => {
  return (
    <div className='swiper__controls controls'>
      <div className='controls__fraction' ref={refElem}></div>
      <div className='controls__pagination'></div>
      <div className='controls__direction direction'>
        <div className='direction__prev'></div>
        <div className='direction__next'></div>
      </div>
    </div>
  );
};

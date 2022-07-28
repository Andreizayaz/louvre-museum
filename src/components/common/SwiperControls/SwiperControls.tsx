import { FC, MutableRefObject, ReactElement } from 'react';

import { SwiperControlsClasses } from '../../sections/visiting/SwiperSlider/types';

type SwiperControlsPropsTypes = {
  refElem?: MutableRefObject<null>;
  isFraction: boolean;
  swiperControlsClasses: SwiperControlsClasses;
};

export const SwiperControls: FC<SwiperControlsPropsTypes> = ({
  refElem,
  isFraction,
  swiperControlsClasses: {
    swiperControls,
    fractionClasses,
    paginationClasses,
    directionClasses,
    prevDirectionClasses,
    nextDirectionClasses
  }
}): ReactElement => {
  return (
    <div className={swiperControls}>
      {isFraction && <div className={fractionClasses} ref={refElem}></div>}
      <div className={paginationClasses}></div>
      <div className={directionClasses}>
        <button className={prevDirectionClasses}></button>
        <button className={nextDirectionClasses}></button>
      </div>
    </div>
  );
};

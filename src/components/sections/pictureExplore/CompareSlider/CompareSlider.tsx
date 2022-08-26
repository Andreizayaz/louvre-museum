import { FC, ReactElement } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer
} from 'react-compare-slider';

import before from '../img/before.jpg';
import after from '../img/after.jpg';

import './CompareSlider.scss';
import { useSwipeable } from 'react-swipeable';
import { TOUCH_THRESHOLD_X, UP_DIRECTION } from 'src/constants';

type CompareSliderPropsTypes = {
  imageTitle: string;
};

export const CompareSlider: FC<CompareSliderPropsTypes> = ({
  imageTitle
}): ReactElement => {
  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const { absX, absY, dir } = eventData;
      if (absX < TOUCH_THRESHOLD_X) {
        if (dir === UP_DIRECTION) {
          window.scrollTo(0, window.pageYOffset + absY);
          return;
        }
        window.scrollTo(0, window.pageYOffset - absY);
        return;
      }
    }
  });
  return (
    <div
      className='picture-explore__compare-slider compare-slider'
      {...handlers}
    >
      <ReactCompareSlider
        style={{
          cursor: 'grab',
          ...styleFitContainer({
            cursor: 'grab'
          })
        }}
        itemOne={
          <ReactCompareSliderImage
            src={before}
            title={imageTitle}
            alt={imageTitle}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={after}
            title={imageTitle}
            alt={imageTitle}
          />
        }
      />
    </div>
  );
};

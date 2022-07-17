import { FC, ReactElement } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer
} from 'react-compare-slider';

import before from './img/before.jpg';
import after from './img/after.jpg';

type CompareSliderPropsTypes = {
  imageTitle: string;
};

export const CompareSlider: FC<CompareSliderPropsTypes> = ({
  imageTitle
}): ReactElement => (
  <div className='picture-explore__compare-slider compare-slider'>
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

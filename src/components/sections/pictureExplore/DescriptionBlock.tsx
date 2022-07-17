import { FC, ReactElement } from 'react';

type DescriptionBlockPropsTypes = {
  heading: string;
  firstRow: string;
  secondRowFirstHalf: string;
  highlightedText: string;
  secondRowSecondHalf: string;
  thirdRow: string;
};

export const DescriptionBlock: FC<DescriptionBlockPropsTypes> = ({
  heading,
  firstRow,
  secondRowFirstHalf,
  highlightedText,
  secondRowSecondHalf,
  thirdRow
}): ReactElement => (
  <div className='picture-explore__picture-content picture-content'>
    <h2 className='picture-content__heading'>{heading}</h2>
    <div className='picture-content__description picture-description '>
      <p className='picture-description__text'>{firstRow}</p>
      <p className='picture-description__text'>
        {secondRowFirstHalf}&nbsp;
        <span className='highlighted-text'>{highlightedText}</span>&nbsp;
        {secondRowSecondHalf}
      </p>
      <p className='picture-description__text'>{thirdRow}</p>
    </div>
  </div>
);

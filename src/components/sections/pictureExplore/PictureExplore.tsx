import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { DescriptionBlock } from './DescriptionBlock';
import { CompareSlider } from './CompareSlider';

type PictureExplorePropsTypes = {
  heading: string;
  firstRow: string;
  secondRowFirstHalf: string;
  highlightedText: string;
  secondRowSecondHalf: string;
  thirdRow: string;
  imageTitle: string;
};

export const PictureExplore: FC<PictureExplorePropsTypes> = ({
  heading,
  firstRow,
  secondRowFirstHalf,
  highlightedText,
  secondRowSecondHalf,
  thirdRow,
  imageTitle
}): ReactElement => {
  const { ref: pictureExploreRef, inView: pictureExploreIsVisible } = useInView(
    {
      threshold: 0.2
    }
  );

  return (
    <section
      ref={pictureExploreRef}
      className='picture-explore'
      id='picture-explore'
      style={{ display: 'none' }}
    >
      <div
        className={`picture-explore__container container ${
          pictureExploreIsVisible ? 'picture-explore__container_visible' : ''
        }`}
      >
        <DescriptionBlock
          heading={heading}
          firstRow={firstRow}
          secondRowFirstHalf={secondRowFirstHalf}
          highlightedText={highlightedText}
          secondRowSecondHalf={secondRowSecondHalf}
          thirdRow={thirdRow}
        />
        <CompareSlider imageTitle={imageTitle} />
      </div>
    </section>
  );
};

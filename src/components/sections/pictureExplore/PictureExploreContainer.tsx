import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { PictureExplore } from './PictureExplore';

import './PictureExplore.scss';

const PictureExploreContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'picture_explore'
  });

  return (
    <PictureExplore
      heading={t('section_heading')}
      firstRow={t('first_row')}
      secondRowFirstHalf={t('second_row_first_half')}
      highlightedText={t('second_row_highlighted_text')}
      secondRowSecondHalf={t('second_row_second_half')}
      thirdRow={t('third_row')}
      imageTitle={t('image_title')}
    />
  );
};

export default PictureExploreContainer;
PictureExploreContainer.displayName = 'PictureExploreContainer';

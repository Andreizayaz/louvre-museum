import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { VirtualTour } from './VirtualTour';

import { virtualTourData } from './data';

import './VirtualTour.scss';

const VirtualTourContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'virtual_tour'
  });

  const data = virtualTourData.map(({ href, src, translationKey }) => {
    return { href, src, text: t(translationKey) };
  });

  return (
    <VirtualTour
      virtualTourData={data}
      sectionHeading={t('section_heading')}
      virtualTourDescriptionHeading={t('virtual_tour_description')}
      panoramaViewText={t('panorama_view')}
    />
  );
};

export default VirtualTourContainer;
VirtualTourContainer.displayName = 'VirtualTourContainer';

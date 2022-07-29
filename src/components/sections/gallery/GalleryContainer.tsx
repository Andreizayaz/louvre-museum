import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { galleryData } from './data';

import { Gallery } from './Gallery';

const GalleryContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'art_gallery' });
  return <Gallery galleryData={galleryData} heading={t('section_heading')} />;
};

export default GalleryContainer;
GalleryContainer.displayName = 'GalleryContainer';

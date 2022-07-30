import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { galleryData } from './data';

import { Gallery } from './Gallery';

const GalleryContainer: FC = (): ReactElement => {
  const [t1] = useTranslation('translation', { keyPrefix: 'art_gallery' });
  const [t2] = useTranslation('translation', {
    keyPrefix: 'art_gallery.pictures'
  });
  return (
    <Gallery
      galleryData={galleryData.map((item) => {
        return { ...item, title: t2(item.translationKey) };
      })}
      heading={t1('section_heading')}
      viewMore={t1('view')}
    />
  );
};

export default GalleryContainer;
GalleryContainer.displayName = 'GalleryContainer';

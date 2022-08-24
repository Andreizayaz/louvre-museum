import { FC, ReactElement } from 'react';

import { picturesType } from './types';

import './PicturesGallery.scss';

type PicturesGalleryPropsTypes = {
  pictures: picturesType[];
};

export const PicturesGallery: FC<PicturesGalleryPropsTypes> = ({
  pictures
}): ReactElement => (
  <div className='pictures-gallery'>
    {pictures.map(({ src }) => (
      <div
        key={src}
        style={{ backgroundImage: `url(${src})` }}
        className='pictures-gallery__item'
      ></div>
    ))}
  </div>
);

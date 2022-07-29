import { FC, ReactElement } from 'react';

import { GalleryCard } from './galleryCard';

import { galleryDataType } from './types';

import './Gallery.scss';

type GalleryPropsTypes = {
  heading: string;
  galleryData: galleryDataType[];
};

export const Gallery: FC<GalleryPropsTypes> = ({
  heading,
  galleryData
}): ReactElement => (
  <section id='gallery' className='gallery'>
    <div className='gallery__container container'>
      <div className='gallery__inner-content inner-content'>
        <h2 className='inner-content__heading'>{heading}</h2>
        <div className='inner-content__images images'>
          <div className='images-list'>
            {galleryData
              .sort(() => Math.random() - 0.5)
              .map(({ id, href, src, title }) => (
                <GalleryCard key={id} href={href} src={src} title={title} />
              ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

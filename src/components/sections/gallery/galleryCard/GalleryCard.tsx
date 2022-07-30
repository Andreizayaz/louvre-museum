import { FC, ReactElement, RefObject, useEffect, useRef } from 'react';

import './GalleryCard.scss';

type GalleryCardPropsTypes = {
  title: string;
  src: string;
  href: string;
  viewMore: string;
};

export const GalleryCard: FC<GalleryCardPropsTypes> = ({
  title,
  src,
  href,
  viewMore
}): ReactElement => {
  const cardRef = useRef<HTMLDivElement>();

  const reveal = () => {
    const windowheight = window.innerHeight;
    const revealtop = cardRef.current?.getBoundingClientRect().top;
    const revealpoint = 150;

    if (revealtop && revealtop < windowheight - revealpoint) {
      cardRef.current?.classList.add('gallery-card_active');
    } else {
      cardRef.current?.classList.remove('gallery-card_active');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div
      ref={cardRef as RefObject<HTMLDivElement>}
      className='images-list__item gallery-card'
    >
      <div className='gallery-card__image'>
        <img src={src} alt={title} title={title} />
      </div>
      <div className='gallery-card__description'>
        <h4 className='description__heading'>{title}</h4>
        <a
          className='description__link'
          href={href}
          target='_blank'
          rel='noreferrer'
        >
          {viewMore}
        </a>
      </div>
    </div>
  );
};

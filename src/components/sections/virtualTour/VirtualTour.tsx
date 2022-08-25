import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { VirtualTourDataType } from './types';

import { Card } from './Card';

type VirtualTourPropsTypes = {
  virtualTourData: VirtualTourDataType[];
  sectionHeading: string;
  virtualTourDescriptionHeading: string;
  panoramaViewText: string;
};

export const VirtualTour: FC<VirtualTourPropsTypes> = ({
  virtualTourData,
  sectionHeading,
  virtualTourDescriptionHeading,
  panoramaViewText
}): ReactElement => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      className='virtual-tour'
      id='virtual-tour'
      style={{ display: 'none' }}
    >
      <div className='virtual-tour__container container' ref={ref}>
        <h2 className='virtual-tour__heading'>{sectionHeading}</h2>
        <ul
          className={`virtual-tour__gallery-img gallery-img ${
            inView ? 'gallery-img_visible' : ''
          }`}
        >
          {virtualTourData.map(({ href, src, text }) => (
            <li key={text} className='gallery-img__item'>
              <a
                className='gallery-img__link'
                href={href}
                target='_blank'
                rel='noreferrer'
              >
                <Card
                  backgroundUrl={src}
                  cardHeading={text}
                  descriptionHeading={virtualTourDescriptionHeading}
                  contentText={panoramaViewText}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

import { FC, ReactElement } from 'react';

import './MuseumHeading.scss';

type MuseumHeadingPropsTypes = {
  heading: string;
  subheading: string;
};

export const MuseumHeading: FC<MuseumHeadingPropsTypes> = ({
  heading,
  subheading
}): ReactElement => (
  <div className='museum-heading'>
    <div className='museum-heading__logo'></div>
    <h2 className='museum-heading__heading'>{heading}</h2>
    <h4 className='museum-heading__subheading'>{subheading}</h4>
  </div>
);

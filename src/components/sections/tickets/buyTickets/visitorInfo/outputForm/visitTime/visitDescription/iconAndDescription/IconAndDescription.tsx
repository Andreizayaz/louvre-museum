import { FC, ReactElement } from 'react';

import './IconAndDescription.scss';

type IconAndDescriptionPropsTypes = {
  icon: string;
  description: string;
};

export const IconAndDescription: FC<IconAndDescriptionPropsTypes> = ({
  icon,
  description
}): ReactElement => (
  <div className='icon-and-description'>
    <div
      className='icon-time'
      style={{ backgroundImage: `url(${icon})` }}
    ></div>
    <div className='description-time'>{description}</div>
  </div>
);

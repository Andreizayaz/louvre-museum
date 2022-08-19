import { FC, ReactElement } from 'react';

import { IconAndDescription } from './iconAndDescription';

import { timeDataType } from './types';

type VisitDescriptionPropsTypes = {
  heading: string;
  subheading: string;
  timeData: timeDataType[];
};

export const VisitDescription: FC<VisitDescriptionPropsTypes> = ({
  heading,
  subheading,
  timeData
}): ReactElement => (
  <div className='visit-description'>
    <h3 className='visit-description__heading'>{heading}</h3>
    <h4 className='visit-description__subheading'>{subheading}</h4>
    <div className='visit-description__time-and-type'>
      {timeData.map(({ icon, description }) => (
        <IconAndDescription key={icon} icon={icon} description={description} />
      ))}
    </div>
  </div>
);

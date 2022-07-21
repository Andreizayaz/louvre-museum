import { FC, ReactElement } from 'react';

import './Tracker.scss';

type TrackerPropsTypes = {
  trackerContainerClasses: string;
};

export const Tracker: FC<TrackerPropsTypes> = ({
  trackerContainerClasses
}): ReactElement => (
  <div className={trackerContainerClasses}>
    <input
      type='range'
      value='50'
      min='0'
      max='100'
      step='1'
      className='tracker__progress'
    />
  </div>
);

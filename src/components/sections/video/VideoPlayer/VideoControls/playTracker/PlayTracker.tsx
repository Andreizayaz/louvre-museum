import { FC, ReactElement } from 'react';

import { Tracker } from '../tracker';

import './PlayTracker.scss';

export const PlayTracker: FC = (): ReactElement => (
  <div className='play-tracker'>
    <Tracker trackerContainerClasses='play__tracker' />
  </div>
);

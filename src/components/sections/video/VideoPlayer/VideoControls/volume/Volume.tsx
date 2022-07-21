import { FC, ReactElement } from 'react';

import { Tracker } from '../tracker';

import './Volume.scss';

export const Volume: FC = (): ReactElement => (
  <div className='volume'>
    <button className='volume__btn'></button>
    <Tracker trackerContainerClasses='volume__tracker' />
  </div>
);

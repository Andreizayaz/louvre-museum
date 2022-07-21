import { FC, ReactElement } from 'react';

import { PlayTracker } from '../playTracker';

import './Play.scss';

export const Play: FC = (): ReactElement => (
  <div className='play-section'>
    <div className='play'>
      <button className='play__btn'></button>
    </div>
    <div className='play__absolute-btn absolute-btn'>
      <button className='absolute-btn__play'></button>
    </div>
    <PlayTracker />
  </div>
);

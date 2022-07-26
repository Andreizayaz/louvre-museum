import { FC, ReactElement } from 'react';

import { PlayTimeType } from './types';

type DisplayPlayedTimePropsTypes = {
  playedTime: PlayTimeType;
  totalTime: PlayTimeType;
};

export const DisplayPlayedTime: FC<DisplayPlayedTimePropsTypes> = ({
  playedTime,
  totalTime
}): ReactElement => (
  <div className='play-tracker__time time'>
    <span className='time__start'>00:00</span>
    <span className='time__progress'>
      {playedTime.hours !== '00' ? `${playedTime.hours}:` : ''}
      {playedTime.minutes !== '00' ? `${playedTime.minutes}:` : '00:'}
      {playedTime.seconds !== '00' ? `${playedTime.seconds}` : '00'}
    </span>
    <span className='time__end'>
      {totalTime.hours !== '00' ? `${totalTime.hours}:` : ''}
      {totalTime.minutes !== '00' ? `${totalTime.minutes}:` : '00:'}
      {totalTime.seconds !== '00' ? `${totalTime.seconds}` : '00'}
    </span>
  </div>
);

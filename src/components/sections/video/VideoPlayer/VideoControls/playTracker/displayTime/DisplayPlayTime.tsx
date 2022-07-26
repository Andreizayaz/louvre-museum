import { FC, ReactElement } from 'react';

import { PlayTimeType } from '../types';

type DisplayPlayTimePropsTypes = {
  totalTime: PlayTimeType;
};

export const DisplayPlayTime: FC<DisplayPlayTimePropsTypes> = ({
  totalTime
}): ReactElement => (
  <div className='play-tracker__time time'>
    <span className='time__start'>00:00</span>
    <span className='time__end'>
      {totalTime.hours !== '00' ? `${totalTime.hours}:` : ''}
      {totalTime.minutes !== '00' ? `${totalTime.minutes}:` : '00:'}
      {totalTime.seconds !== '00' ? `${totalTime.seconds}` : '00'}
    </span>
  </div>
);

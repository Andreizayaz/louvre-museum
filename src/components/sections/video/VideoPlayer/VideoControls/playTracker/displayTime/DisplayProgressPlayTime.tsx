import { FC, ReactElement } from 'react';

import { PlayTimeType } from '../types';

type DisplayPlayTimePropsTypes = {
  playedTime: PlayTimeType;
  positionLeft: string;
};

export const DisplayProgressPlayTime: FC<DisplayPlayTimePropsTypes> = ({
  playedTime,
  positionLeft
}): ReactElement => (
  <div className='play-tracker__time-progress time-progress'>
    <span className='time-progress__text' style={{ left: `${positionLeft}%` }}>
      {playedTime.hours !== '00' ? `${playedTime.hours}:` : ''}
      {playedTime.minutes !== '00' ? `${playedTime.minutes}:` : '00:'}
      {playedTime.seconds !== '00' ? `${playedTime.seconds}` : '00'}
    </span>
  </div>
);

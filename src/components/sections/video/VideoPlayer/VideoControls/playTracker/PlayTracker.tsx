import { ChangeEvent, FC, ReactElement } from 'react';

import { Tracker } from '../tracker';

import './PlayTracker.scss';

type PlayTrackerPropsTypes = {
  played: number;
  playedSeconds: number;
  handleProgressTrack: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PlayTracker: FC<PlayTrackerPropsTypes> = ({
  played,
  playedSeconds,
  handleProgressTrack
}): ReactElement => (
  <div className='play-tracker'>
    <Tracker
      trackerContainerClasses='play__tracker'
      valueForBackground={played * 100}
      value={playedSeconds}
      max={playedSeconds / played}
      step={1}
      handleInputChange={(e) => handleProgressTrack(e)}
    />
  </div>
);

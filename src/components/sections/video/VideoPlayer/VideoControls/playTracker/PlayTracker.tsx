import { ChangeEvent, FC, ReactElement } from 'react';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import { Tracker } from '../tracker';

import { DisplayPlayTime, DisplayProgressPlayTime } from './displayTime';

import { getTime } from './helpers';

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
}): ReactElement => {
  const { isPlayerClicked } = useVideoPlayerContext();
  const { round } = Math;
  const playedTime = getTime(round(playedSeconds));
  const totalTime = getTime(round(playedSeconds / played));
  return (
    <div className='play-tracker'>
      {isPlayerClicked && (
        <DisplayProgressPlayTime
          playedTime={playedTime}
          positionLeft={`${played * 100}`}
        />
      )}
      <Tracker
        trackerContainerClasses='play__tracker'
        valueForBackground={played * 100}
        value={playedSeconds}
        max={playedSeconds / played}
        step={1}
        handleInputChange={(e) => handleProgressTrack(e)}
      />
      {isPlayerClicked && <DisplayPlayTime totalTime={totalTime} />}
    </div>
  );
};

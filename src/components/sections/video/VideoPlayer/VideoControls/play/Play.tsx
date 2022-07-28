import { FC, ReactElement } from 'react';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import { PlayTracker } from '../playTracker';

import './Play.scss';

export const Play: FC = (): ReactElement => {
  const {
    reactPlayerOptions: { playing },
    played,
    playedSeconds,
    handlePlay,
    handleProgressTrack
  } = useVideoPlayerContext();

  return (
    <div className='play-section'>
      <div className='play'>
        <button
          className={`play__btn ${playing ? 'play__btn_pause' : ''}`}
          onClick={handlePlay}
        ></button>
      </div>
      {!playing && (
        <div className='play__absolute-btn'>
          <button
            className={`absolute-btn ${
              playing ? 'absolute-btn_pause' : 'absolute-btn_play'
            }`}
            onClick={handlePlay}
          ></button>
        </div>
      )}
      <PlayTracker
        played={played}
        playedSeconds={playedSeconds}
        handleProgressTrack={handleProgressTrack}
      />
    </div>
  );
};

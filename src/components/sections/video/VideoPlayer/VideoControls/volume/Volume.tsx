import { FC, ReactElement } from 'react';

import { Tracker } from '../tracker';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import './Volume.scss';

export const Volume: FC = (): ReactElement => {
  const { volume, handleVolume, muteVolume } = useVideoPlayerContext();

  return (
    <div className='volume'>
      <button
        className={`volume__btn ${
          volume ? 'volume__btn_play' : 'volume__btn_pause'
        }`}
        onClick={muteVolume}
      ></button>
      <Tracker
        trackerContainerClasses='volume__tracker'
        value={volume}
        valueForBackground={volume * 100}
        handleInputChange={handleVolume}
      />
    </div>
  );
};

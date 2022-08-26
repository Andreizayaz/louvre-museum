import { FC, ReactElement, useState } from 'react';
import { TABLET_SIZE } from 'src/constants';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import { Tracker } from '../tracker';

import './Volume.scss';

export const Volume: FC = (): ReactElement => {
  const [isVolumeTrackerAdaptive, setIsVolumeTrackerAdaptive] = useState(false);
  const {
    reactPlayerOptions: { volume },
    handleVolume,
    muteVolume
  } = useVideoPlayerContext();

  const handleClick = () => {
    muteVolume();
  };

  const mouseMoveHandler = () => {
    if (window.innerWidth <= TABLET_SIZE) {
      setIsVolumeTrackerAdaptive(true);
      return;
    }
  };

  const mouseLeaveHandler = () => {
    if (window.innerWidth <= TABLET_SIZE) {
      setIsVolumeTrackerAdaptive(false);
      return;
    }
  };

  if (window.innerWidth <= TABLET_SIZE) {
    return (
      <div
        className='volume'
        onMouseMove={mouseMoveHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <button
          className={`volume__btn ${
            volume ? 'volume__btn_play' : 'volume__btn_pause'
          }`}
          onClick={handleClick}
        ></button>
        {isVolumeTrackerAdaptive && (
          <Tracker
            trackerContainerClasses='volume__tracker'
            value={volume}
            valueForBackground={volume * 100}
            handleInputChange={handleVolume}
          />
        )}
      </div>
    );
  }

  return (
    <div className='volume'>
      <button
        className={`volume__btn ${
          volume ? 'volume__btn_play' : 'volume__btn_pause'
        }`}
        onClick={handleClick}
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

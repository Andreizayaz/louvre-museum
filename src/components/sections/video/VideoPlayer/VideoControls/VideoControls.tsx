import { FC, ReactElement } from 'react';

import { Play } from './play';
import { Volume } from './volume';
import { ScreenResize } from './screenResize';

import { useVideoPlayerContext } from '../videoPlayerContext';

import './VideoControls.scss';

export const VideoControls: FC = (): ReactElement => {
  const { controlsRef } = useVideoPlayerContext();
  return (
    <div ref={controlsRef} className='video-controls'>
      <Play />
      <Volume />
      <ScreenResize />
    </div>
  );
};

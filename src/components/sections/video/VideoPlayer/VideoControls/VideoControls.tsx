import { FC, ReactElement } from 'react';

import { Play } from './play';
import { Volume } from './volume';
import { ScreenResize } from './screenResize';

import './VideoControls.scss';

export const VideoControls: FC = (): ReactElement => (
  <div className='video-controls'>
    <Play />
    <Volume />
    <ScreenResize />
  </div>
);

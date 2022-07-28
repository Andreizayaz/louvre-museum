import { FC, ReactElement } from 'react';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import fullscreenIcon from './icons/fullscreen.svg';
import fullscreenExitIcon from './icons/fullscreen_exit.svg';

import './ScreenResize.scss';

export const ScreenResize: FC = (): ReactElement => {
  const { handleFullScreen, isFullScreen } = useVideoPlayerContext();
  return (
    <div className='screen-resize'>
      <button
        style={{
          backgroundImage: `url(${
            isFullScreen ? fullscreenExitIcon : fullscreenIcon
          })`
        }}
        className='screen-resize__btn'
        onClick={handleFullScreen}
      ></button>
    </div>
  );
};

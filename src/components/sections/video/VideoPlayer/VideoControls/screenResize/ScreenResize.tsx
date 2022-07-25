import { FC, ReactElement } from 'react';

import { useVideoPlayerContext } from '../../videoPlayerContext';

import './ScreenResize.scss';

export const ScreenResize: FC = (): ReactElement => {
  const { handleFullScreen } = useVideoPlayerContext();
  return (
    <div className='screen-resize'>
      <button
        className='screen-resize__btn'
        onClick={handleFullScreen}
      ></button>
    </div>
  );
};

import { FC, ReactElement } from 'react';
import ReactPlayer from 'react-player';

import { useVideoPlayerContext } from './videoPlayerContext';

import { VideoControls } from './VideoControls';

import './VideoPlayer.scss';

export const VideoPlayer: FC = (): ReactElement => {
  const {
    refPlayer,
    srcVideo,
    reactPlayerHeight,
    reactPlayerOptions,
    width,
    handlePlay,
    handleProgress,
    /* handleStartOrResumeVideo, */
    handlePreview,
    handleVideoPlayFinish
  } = useVideoPlayerContext();
  return (
    <>
      <div onClick={handlePlay} style={{ cursor: 'pointer' }}>
        <ReactPlayer
          ref={refPlayer}
          url={srcVideo}
          controls={false}
          height={reactPlayerHeight}
          width={width}
          {...reactPlayerOptions}
          onProgress={handleProgress}
          /* onPlay={handleStartOrResumeVideo} */
          onClickPreview={handlePreview}
          onEnded={handleVideoPlayFinish}
        />
      </div>
      <VideoControls />
    </>
  );
};

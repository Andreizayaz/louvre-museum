import { FC, RefObject, ReactElement } from 'react';
import ReactPlayer from 'react-player';

import { VideoControls } from './VideoControls';

import {
  reactOptionTypes,
  controlFunctionTypes,
  controlOptionTypes
} from './types';

import { VideoPlayerContext } from './videoPlayerContext';

import './VideoPlayer.scss';

type VideoPlayerPropsTypes = {
  srcVideo: string;
  posterVideo: string;
  reactPlayerHeight: string;
  width: string;
  reactPlayerOptions: reactOptionTypes;
  controlFuncs: controlFunctionTypes;
  controlOptions: controlOptionTypes;
  refPlayer: RefObject<ReactPlayer>;
  loadedSeconds: number;
  playedSeconds: number;
  played: number;
  controlsRef: RefObject<HTMLDivElement>;
  videoRef: RefObject<HTMLDivElement>;
  isFullScreen: boolean;
  isPlayerClicked: boolean;
  handleProgress: (e: any) => void;
  handleStartOrResumeVideo: () => void;
  handlePreview: () => void;
  handleVideoPlayFinish: () => void;
  handleVideoPlayStart: () => void;
};

export const VideoPlayer: FC<VideoPlayerPropsTypes> = ({
  srcVideo,
  reactPlayerHeight,
  width,
  reactPlayerOptions,
  controlFuncs,
  controlOptions,
  refPlayer,
  handleProgress,
  handleStartOrResumeVideo,
  handlePreview,
  handleVideoPlayFinish,
  loadedSeconds,
  playedSeconds,
  played,
  controlsRef,
  isFullScreen,
  isPlayerClicked
}): ReactElement => {
  return (
    <>
      <div onClick={controlFuncs.handlePlay} style={{ cursor: 'pointer' }}>
        <ReactPlayer
          ref={refPlayer}
          url={srcVideo}
          controls={false}
          height={reactPlayerHeight}
          width={width}
          {...reactPlayerOptions}
          onProgress={handleProgress}
          onPlay={handleStartOrResumeVideo}
          onClickPreview={handlePreview}
          onEnded={handleVideoPlayFinish}
        />
      </div>
      <VideoPlayerContext.Provider
        value={{
          ...controlFuncs,
          ...controlOptions,
          loadedSeconds,
          playedSeconds,
          played,
          controlsRef,
          isFullScreen,
          isPlayerClicked
        }}
      >
        <VideoControls />
      </VideoPlayerContext.Provider>
    </>
  );
};

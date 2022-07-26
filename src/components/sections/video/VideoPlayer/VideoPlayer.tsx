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
  handleStartVideo: () => void;
  handlePreview: () => void;
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
  handleStartVideo,
  handlePreview,
  loadedSeconds,
  playedSeconds,
  played,
  controlsRef,
  isFullScreen,
  isPlayerClicked
}): ReactElement => {
  return (
    <>
      <ReactPlayer
        ref={refPlayer}
        url={srcVideo}
        controls={false}
        height={reactPlayerHeight}
        width={width}
        {...reactPlayerOptions}
        onProgress={handleProgress}
        onStart={handleStartVideo}
        onClickPreview={handlePreview}
        /* style={{ height: `${isFullScreen ? 'calc(100vh - 65px)' : '650px'}` }} */
      />
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

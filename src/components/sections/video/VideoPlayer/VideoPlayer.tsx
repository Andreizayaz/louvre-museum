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
  handleProgress: (e: any) => void;
  handleStartVideo: () => void;
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
  loadedSeconds,
  playedSeconds,
  played,
  controlsRef,
  isFullScreen
}): ReactElement => {
  console.log('React height from props: ', reactPlayerHeight);
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
      />
      <VideoPlayerContext.Provider
        value={{
          ...controlFuncs,
          ...controlOptions,
          loadedSeconds,
          playedSeconds,
          played,
          controlsRef,
          isFullScreen
        }}
      >
        <VideoControls />
      </VideoPlayerContext.Provider>
    </>
  );
};

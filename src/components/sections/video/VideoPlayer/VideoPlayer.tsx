import { FC, ReactElement } from 'react';
import ReactPlayer from 'react-player';

import { VideoControls } from './VideoControls';

import './VideoPlayer.scss';

type VideoPlayerPropsTypes = {
  srcVideo: string;
  posterVideo: string;
  height: string;
  width: string;
};

export const VideoPlayer: FC<VideoPlayerPropsTypes> = ({
  srcVideo,
  posterVideo,
  height,
  width
}): ReactElement => (
  <>
    <ReactPlayer
      url={srcVideo}
      controls={true}
      light={posterVideo}
      height={height}
      width={width}
    />
    <VideoControls />
  </>
);

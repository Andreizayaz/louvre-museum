import { FC, ReactElement } from 'react';

import { VideoPlayer } from './VideoPlayer';

type VideoPlayerContainerPropsTypes = {
  srcVideo: string;
  posterVideo: string;
  height: string;
  width: string;
};

const VideoPlayerContainer: FC<VideoPlayerContainerPropsTypes> = ({
  srcVideo,
  posterVideo,
  height,
  width
}): ReactElement => {
  return (
    <VideoPlayer
      height={height}
      posterVideo={posterVideo}
      srcVideo={srcVideo}
      width={width}
    />
  );
};

export default VideoPlayerContainer;
VideoPlayerContainer.displayName = 'VideoPlayerContainer';

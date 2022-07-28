import { createContext, createRef, useContext } from 'react';

import { VideoPlayerContextType } from './types';

export const VideoPlayerContext = createContext<VideoPlayerContextType>({
  handlePlay: () => undefined,
  handleVolume: () => undefined,
  muteVolume: () => undefined,
  handleProgressTrack: () => undefined,
  handleFullScreen: async () => {
    await new Promise((resolve) => resolve(undefined));
  },
  handlePreview: () => undefined,
  handleProgress: () => undefined,
  handleStartOrResumeVideo: () => undefined,
  handleVideoPlayFinish: () => undefined,

  posterVideo: '',
  reactPlayerHeight: '',
  reactPlayerOptions: {
    light: '',
    playing: false,
    volume: 0 /* playbackRate: 1 */
  },
  refPlayer: createRef(),
  srcVideo: '',
  width: '',
  loadedSeconds: 0,
  playedSeconds: 0,
  played: 0,
  controlsRef: null,
  isFullScreen: false,
  isPlayerClicked: false
});

export const useVideoPlayerContext = (): VideoPlayerContextType =>
  useContext(VideoPlayerContext);

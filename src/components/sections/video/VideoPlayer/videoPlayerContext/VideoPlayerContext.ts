import { createContext, useContext } from 'react';

import { VideoPlayerContextType } from './types';

export const VideoPlayerContext = createContext<VideoPlayerContextType>({
  handlePlay: () => undefined,
  handleVolume: () => undefined,
  muteVolume: () => undefined,
  handleProgressTrack: () => undefined,
  handleFullScreen: async () => {
    await new Promise((resolve) => resolve(undefined));
  },
  playing: false,
  volume: 0,
  loadedSeconds: 0,
  playedSeconds: 0,
  played: 0,
  controlsRef: null,
  isFullScreen: false,
  isPlayerClicked: false
});

export const useVideoPlayerContext = (): VideoPlayerContextType =>
  useContext(VideoPlayerContext);

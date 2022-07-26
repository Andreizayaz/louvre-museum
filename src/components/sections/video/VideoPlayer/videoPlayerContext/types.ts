import { ChangeEvent, RefObject } from 'react';

export type VideoPlayerContextType = {
  handlePlay: () => void;
  handleVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  muteVolume: () => void;
  handleProgressTrack: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFullScreen: () => Promise<void>;

  playing: boolean;
  volume: number;
  loadedSeconds: number;
  playedSeconds: number;
  played: number;
  controlsRef: RefObject<HTMLDivElement> | null;
  isFullScreen: boolean;
  isPlayerClicked: boolean;
};

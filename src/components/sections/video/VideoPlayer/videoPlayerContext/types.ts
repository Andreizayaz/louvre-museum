import { ChangeEvent, RefObject } from 'react';
import ReactPlayer from 'react-player';

export type VideoPlayerContextType = {
  handlePlay: () => void;
  handleVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  muteVolume: () => void;
  handleProgressTrack: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFullScreen: () => Promise<void>;
  handleProgress: (e: any) => void;
  handleStartOrResumeVideo: () => void;
  handlePreview: () => void;
  handleVideoPlayFinish: () => void;

  loadedSeconds: number;
  playedSeconds: number;
  played: number;
  controlsRef: RefObject<HTMLDivElement> | null;
  isFullScreen: boolean;
  isPlayerClicked: boolean;
  srcVideo: string;
  posterVideo: string;
  reactPlayerHeight: string;
  width: string;
  reactPlayerOptions: reactOptionTypes;
  refPlayer: RefObject<ReactPlayer>;
};

export type reactOptionTypes = {
  playing: boolean;
  light: string;
  volume: number;
  /* playbackRate: number; */
};

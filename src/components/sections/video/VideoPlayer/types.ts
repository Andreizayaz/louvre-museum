import { ChangeEvent } from 'react';

export type reactOptionTypes = {
  playing: boolean;
  light: string;
  volume: number;
};

export type controlFunctionTypes = {
  handlePlay: () => void;
  handleVolume: (e: ChangeEvent<HTMLInputElement>) => void;
  muteVolume: () => void;
  handleProgressTrack: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFullScreen: () => Promise<void>;
};

export type controlOptionTypes = {
  playing: boolean;
  volume: number;
};

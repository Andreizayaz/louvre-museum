export type VideoPlayerTypes = {
  playing: boolean;
  volume: number;
};

export type VolumeActionType = {
  payload: number;
};

export type PlayingActionType = {
  payload: boolean;
};

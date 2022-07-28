import { RootStateType } from '../index';
import { VideoPlayerTypes } from './types';

export const selectVideoParams = (state: RootStateType): VideoPlayerTypes =>
  state.videoPlayerState.videoParams;

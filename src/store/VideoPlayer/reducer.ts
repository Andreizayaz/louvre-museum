import { createSlice } from '@reduxjs/toolkit';

import { VideoPlayerTypes, VolumeActionType, PlayingActionType } from './types';

type initialStateType = { videoParams: VideoPlayerTypes };

const initialState: initialStateType = {
  videoParams: { playing: false, volume: 0 }
};

const videoPlayerSlice = createSlice({
  name: 'videoPlayerReducer',
  initialState,
  reducers: {
    changePlaying(state, action: PlayingActionType) {
      state.videoParams = {
        ...state.videoParams,
        playing: action.payload
      };
    },
    changeVolume(state, action: VolumeActionType) {
      state.videoParams = {
        ...state.videoParams,
        volume: action.payload
      };
    }
  }
});

// Actions
export const { changePlaying, changeVolume } = videoPlayerSlice.actions;

const currentLanguageReducer = videoPlayerSlice.reducer;
export default currentLanguageReducer;

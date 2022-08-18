import { createSlice } from '@reduxjs/toolkit';

import { DisabledBuyBtnAction } from './types';

type initialStateType = {
  isDisabled: boolean;
};

const initialState: initialStateType = {
  isDisabled: true
};

const slice = createSlice({
  initialState,
  name: 'DisabledBuyBtn',
  reducers: {
    setIsDisabledBuyBtn: (state, action: DisabledBuyBtnAction) => {
      state.isDisabled = action.payload;
    }
  }
});

export const { setIsDisabledBuyBtn } = slice.actions;
export const disableBuyBtnReducer = slice.reducer;

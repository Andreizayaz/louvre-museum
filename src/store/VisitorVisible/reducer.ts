import { createSlice } from '@reduxjs/toolkit';

import { VisitorVisibleAction } from './types';

type initialStateType = {
  isVisible: boolean;
};

const initialState: initialStateType = {
  isVisible: false
};

const slice = createSlice({
  initialState,
  name: 'visitorVisible',
  reducers: {
    setIsVisitorVisible: (state, action: VisitorVisibleAction) => {
      state.isVisible = action.payload;
    }
  }
});

export const { setIsVisitorVisible } = slice.actions;
export const visitorVisibleReducer = slice.reducer;

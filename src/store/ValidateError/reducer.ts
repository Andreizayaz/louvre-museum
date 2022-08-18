import { createSlice } from '@reduxjs/toolkit';

import { ValidateErrorActionType } from './types';

type initialStateType = {
  isValidateError: boolean;
};

const initialState: initialStateType = {
  isValidateError: false
};

const slice = createSlice({
  initialState,
  name: 'validateErrorObj',
  reducers: {
    setValidateError: (state, action: ValidateErrorActionType) => {
      state.isValidateError = action.payload;
    }
  }
});

export const { setValidateError } = slice.actions;
export const validateErrorReducer = slice.reducer;

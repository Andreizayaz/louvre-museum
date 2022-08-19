import { createSlice } from '@reduxjs/toolkit';

import { ValidateErrorsTypes, ValidateErrorActionType } from './types';

import { initialData } from './initialData';

type initialStateType = {
  validateErrorsObj: ValidateErrorsTypes;
};

const initialState: initialStateType = {
  validateErrorsObj: initialData
};

const slice = createSlice({
  initialState,
  name: 'validateErrorObj',
  reducers: {
    setValidateError: (state, action: ValidateErrorActionType) => {
      state.validateErrorsObj = action.payload;
    }
  }
});

export const { setValidateError } = slice.actions;
export const validateErrorReducer = slice.reducer;

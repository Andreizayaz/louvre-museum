import { createSlice } from '@reduxjs/toolkit';

import { CurrentLanguageType, LanguageAction } from './types';

type initialStateType = { selectedLanguage: CurrentLanguageType };

const initialState: initialStateType = {
  selectedLanguage: { code: '', name: '', dir: '', country_code: '' }
};

const languageSlice = createSlice({
  name: 'currentLanguageReducer',
  initialState,
  reducers: {
    setCurrentLanguage(state, action: LanguageAction) {
      state.selectedLanguage = action.payload;
    }
  }
});

// Actions
export const { setCurrentLanguage } = languageSlice.actions;

const currentLanguageReducer = languageSlice.reducer;
export default currentLanguageReducer;

import { combineReducers } from 'redux';

import currentLanguageReducer from './Language/reducer';

const rootReducer = combineReducers({
  currentLanguage: currentLanguageReducer
});

export default rootReducer;

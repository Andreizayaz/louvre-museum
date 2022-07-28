import { combineReducers } from 'redux';

import currentLanguageReducer from './Language/reducer';
import videoPlayerReducer from './VideoPlayer/reducer';

const rootReducer = combineReducers({
  currentLanguage: currentLanguageReducer,
  videoPlayerState: videoPlayerReducer
});

export default rootReducer;

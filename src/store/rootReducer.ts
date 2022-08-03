import { combineReducers } from 'redux';

import { currentLanguageReducer } from './Language';
import { videoPlayerReducer } from './VideoPlayer';
import { ticketInfoReducer } from './Tickets';

const rootReducer = combineReducers({
  currentLanguage: currentLanguageReducer,
  videoPlayerState: videoPlayerReducer,
  ticketInfo: ticketInfoReducer
});

export default rootReducer;

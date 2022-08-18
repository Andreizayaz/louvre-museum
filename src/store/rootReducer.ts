import { combineReducers } from 'redux';

import { currentLanguageReducer } from './Language';
import { videoPlayerReducer } from './VideoPlayer';
import { ticketInfoReducer } from './Tickets';
import { visitorVisibleReducer } from './VisitorVisible';
import { disableBuyBtnReducer } from './DisabledBuyBtn';
import { validateErrorReducer } from './ValidateError';

const rootReducer = combineReducers({
  currentLanguage: currentLanguageReducer,
  videoPlayerState: videoPlayerReducer,
  ticketInfo: ticketInfoReducer,
  visitorVisible: visitorVisibleReducer,
  disableBuyBtn: disableBuyBtnReducer,
  validateError: validateErrorReducer
});

export default rootReducer;

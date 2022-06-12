import { RootStateType } from '../index';
import { CurrentLanguageType } from './types';

export const selectCurrentLanguage = (
  state: RootStateType
): CurrentLanguageType => state.currentLanguage.selectedLanguage;

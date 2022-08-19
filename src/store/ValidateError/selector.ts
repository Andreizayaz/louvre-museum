import { RootStateType } from '../index';
import { ValidateErrorsTypes } from './types';

export const selectErrorObject = (state: RootStateType): ValidateErrorsTypes =>
  state.validateError.validateErrorsObj;

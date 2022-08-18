import { RootStateType } from '../index';

export const selectIsValidateError = (state: RootStateType): boolean =>
  state.validateError.isValidateError;

import { RootStateType } from '../index';

export const selectDisableBuyBtn = (state: RootStateType): boolean =>
  state.disableBuyBtn.isDisabled;

import { RootStateType } from '../index';

export const selectIsVisitorVisible = (state: RootStateType): boolean =>
  state.visitorVisible.isVisible;

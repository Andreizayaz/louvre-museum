import { RootStateType } from '../index';
import { VisitorType } from './types';

export const selectTicket = (state: RootStateType): VisitorType =>
  state.ticketInfo.visitorInfo;

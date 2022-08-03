import { createSlice } from '@reduxjs/toolkit';

import { VisitorType, VisitorAction } from './types';

type initialStateType = {
  visitorInfo: VisitorType;
};

const initialState: initialStateType = {
  visitorInfo: {
    ticketType: '',
    basicTicketCount: 0,
    seniorTicketCount: 0,
    totalPrice: 0
  }
};

const slice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setTicketInfo: (state, action: VisitorAction) => {
      state.visitorInfo = action.payload;
    }
  }
});

export const { setTicketInfo } = slice.actions;
export const ticketInfoReducer = slice.reducer;

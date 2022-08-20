import { createContext, useContext } from 'react';

import { ticketsContextType } from './types';

export const TicketsContext = createContext<ticketsContextType>({
  handleChange: () => undefined
});

export const useTicketsContext = (): ticketsContextType =>
  useContext(TicketsContext);

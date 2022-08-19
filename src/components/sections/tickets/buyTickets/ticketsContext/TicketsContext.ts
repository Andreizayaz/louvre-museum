import { createContext, useContext } from 'react';

import { ticketsContextType } from './types';

export const TicketsContext = createContext<ticketsContextType>({
  btnNames: {
    basic: { minus: '', plus: '' },
    senior: { minus: '', plus: '' }
  },
  handleChange: () => undefined,
  handleClick: () => undefined
});

export const useTicketsContext = (): ticketsContextType =>
  useContext(TicketsContext);

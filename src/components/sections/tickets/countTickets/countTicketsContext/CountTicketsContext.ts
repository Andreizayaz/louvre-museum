import { createContext, useContext } from 'react';

import { countTicketsContextType } from './types';

export const CountTicketsContext = createContext<countTicketsContextType>({
  heading: '',
  btnNames: { minus: '', plus: '' },
  ticketsCount: 0
});

export const useCountTicketsContext = (): countTicketsContextType =>
  useContext(CountTicketsContext);

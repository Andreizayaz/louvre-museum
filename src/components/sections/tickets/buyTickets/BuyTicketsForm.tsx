import { FC, ReactElement } from 'react';

import { RadioOptionsGroup } from './radioOptionsGroup';
import { CountTickets } from './countTickets';

export const BuyTicketsForm: FC = (): ReactElement => (
  <div className='buy-tickets'>
    <RadioOptionsGroup />
    <CountTickets />
  </div>
);

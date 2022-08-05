import { FC, ReactElement } from 'react';

import { RadioOptionsGroup } from '../radioOptionsGroup';
import { CountTickets } from '../countTickets';

export const BuyTicketsForm: FC = (): ReactElement => (
  <div className='buy-tickets'>
    <form className='buy-tickets__form'>
      <RadioOptionsGroup />
      <CountTickets />
    </form>
  </div>
);

import { FC, FormEvent, ReactElement } from 'react';

import { RadioOptionsGroup } from '../radioOptionsGroup';
import { CountTickets } from '../countTickets';

type BuyTicketsFormPropsTypes = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const BuyTicketsForm: FC<BuyTicketsFormPropsTypes> = ({
  handleSubmit
}): ReactElement => (
  <div className='buy-tickets'>
    <form className='buy-tickets__form' onSubmit={handleSubmit}>
      <RadioOptionsGroup />
      <CountTickets />
    </form>
  </div>
);

import { FC, ReactElement } from 'react';

import { TicketCounter } from './ticketCounter';

import { counterHeadingsType } from './types';

type CountTicketsPropsTypes = {
  counterHeadings: counterHeadingsType[];
  total: string;
  btnText: string;
};

export const CountTickets: FC<CountTicketsPropsTypes> = ({
  counterHeadings,
  total,
  btnText
}): ReactElement => (
  <div className='count-tickets'>
    {counterHeadings.map(({ heading }) => (
      <TicketCounter key={heading} counterHeading={heading} />
    ))}
    <h4 className='count-tickets__total'>{total} &euro; 220</h4>
    <div className='count-tickets__btn-wrapper'>
      <button className='buy-btn'>{btnText}</button>
    </div>
  </div>
);

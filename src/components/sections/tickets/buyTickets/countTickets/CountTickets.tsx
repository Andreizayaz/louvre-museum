import { FC, ReactElement } from 'react';

import { TicketCounter } from './ticketCounter';

import { counterHeadingsType } from './types';

type CountTicketsPropsTypes = {
  counterHeadings: counterHeadingsType[];
  heading: string;
  total: string;
  btnText: string;
};

export const CountTickets: FC<CountTicketsPropsTypes> = ({
  counterHeadings,
  heading,
  total,
  btnText
}): ReactElement => (
  <div className='count-tickets'>
    <div className='count-tickets__amount amount'>
      <h3 className='amount__heading'>{heading}</h3>
      {counterHeadings.map(({ heading }) => (
        <TicketCounter key={heading} counterHeading={heading} />
      ))}
    </div>
    <h4 className='count-tickets__total'>{total} &euro; 220</h4>
    <div className='count-tickets__btn-wrapper'>
      <button className='buy-btn'>{btnText}</button>
    </div>
  </div>
);

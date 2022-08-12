import { FC, ReactElement } from 'react';

import { TicketCounter } from './ticketCounter';
import { CountTicketsContext } from './countTicketsContext';

import { counterHeadingsType } from './types';

type CountTicketsPropsTypes = {
  counterHeadings: counterHeadingsType[];
  heading: string;
  total: string;
  totalPrice: number;
  btnText: string;
};

export const CountTickets: FC<CountTicketsPropsTypes> = ({
  counterHeadings,
  heading,
  total,
  totalPrice,
  btnText
}): ReactElement => (
  <div className='count-tickets'>
    <div className='count-tickets__amount amount'>
      <h3 className='amount__heading'>{heading}</h3>
      {counterHeadings.map(({ heading, btnNames, ticketsCount }) => (
        <CountTicketsContext.Provider
          key={heading}
          value={{ heading, btnNames, ticketsCount }}
        >
          <TicketCounter key={heading} counterHeading={heading} />
        </CountTicketsContext.Provider>
      ))}
    </div>
    <h4 className='count-tickets__total'>
      {total} &euro; {totalPrice}
    </h4>
    <div className='count-tickets__btn-wrapper'>
      <button className='buy-btn'>{btnText}</button>
    </div>
  </div>
);

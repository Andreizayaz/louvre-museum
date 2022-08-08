import { FC, ReactElement } from 'react';

import { TicketBtnLabel } from './ticketBtnLabel';

import './TicketCounter.scss';

type TicketCounterPropsTypes = {
  counterHeading: string;
};

export const TicketCounter: FC<TicketCounterPropsTypes> = ({
  counterHeading
}): ReactElement => (
  <div className='ticket-counter'>
    <h4 className='ticket-counter__heading'>{counterHeading}</h4>
    <TicketBtnLabel />
  </div>
);

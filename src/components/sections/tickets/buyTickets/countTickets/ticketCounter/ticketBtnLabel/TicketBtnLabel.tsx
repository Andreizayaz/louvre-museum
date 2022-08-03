import { FC, ReactElement } from 'react';

type TicketBtnLabelPropsTypes = {
  ticketCounter: number;
};

export const TicketBtnLabel: FC<TicketBtnLabelPropsTypes> = ({
  ticketCounter
}): ReactElement => (
  <div className='ticket-btn-label'>
    <button className='ticket-btn-label__btn btn __btn_minus'></button>
    <p className='ticket-btn-label__text'>{ticketCounter}</p>
    <button className='ticket-btn-label__btn btn __btn_plus'></button>
  </div>
);

import { FC, ReactElement } from 'react';

type TicketBtnLabelPropsTypes = {
  ticketCounter: number;
  minusName: string;
  plusName: string;
  handleClick: (e: any) => void;
};

export const TicketBtnLabel: FC<TicketBtnLabelPropsTypes> = ({
  ticketCounter,
  minusName,
  plusName,
  handleClick
}): ReactElement => (
  <div className='ticket-btn-label'>
    <button
      className='ticket-btn-label__btn btn_minus'
      name={minusName}
      onClick={(e) => handleClick(e)}
    ></button>
    <p className='ticket-btn-label__text'>{ticketCounter}</p>
    <button
      className='ticket-btn-label__btn btn_plus'
      name={plusName}
      onClick={(e) => handleClick(e)}
    ></button>
  </div>
);

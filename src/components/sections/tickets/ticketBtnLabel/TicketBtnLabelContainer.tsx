import { FC, ReactElement } from 'react';
import { useCountTicketsContext } from '../countTickets/countTicketsContext';
import { useTicketsContext } from '../ticketsContext';

import { TicketBtnLabel } from './TicketBtnLabel';

import './TicketBtnLabel.scss';

const TicketBtnLabelContainer: FC = (): ReactElement => {
  const {
    ticketsCount,
    btnNames: { minus, plus }
  } = useCountTicketsContext();
  const { handleClick } = useTicketsContext();
  return (
    <TicketBtnLabel
      ticketCounter={ticketsCount}
      minusName={minus}
      plusName={plus}
      handleClick={handleClick}
    />
  );
};

export default TicketBtnLabelContainer;
TicketBtnLabelContainer.displayName = 'TicketBtnLabelContainer';

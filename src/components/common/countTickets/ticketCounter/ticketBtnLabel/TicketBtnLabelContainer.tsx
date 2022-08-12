import { FC, ReactElement } from 'react';

import { useTicketsContext } from 'src/components/sections/tickets/buyTickets/ticketsContext';
import { useCountTicketsContext } from '../../countTicketsContext';

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

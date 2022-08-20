import { FC, ReactElement } from 'react';

import { CountTickets } from 'src/components/common';

import { ticketBtnLabelClassesTypes } from 'src/components/common/countTickets/ticketCounter/ticketBtnLabel/types';
import { TicketCounterClassesTypes } from 'src/components/common/countTickets/ticketCounter/types';
import { countTicketsClassesTypes } from 'src/components/common/countTickets/types';

type EntryTicketPropsTypes = {
  heading: string;
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
};

export const EntryTicket: FC<EntryTicketPropsTypes> = ({
  heading,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses
}): ReactElement => (
  <div className='entry-ticket'>
    <CountTickets
      heading={heading}
      countTicketsClasses={countTicketsClasses}
      ticketCounterClasses={ticketCounterClasses}
      ticketBtnLabelClasses={ticketBtnLabelClasses}
    />
  </div>
);

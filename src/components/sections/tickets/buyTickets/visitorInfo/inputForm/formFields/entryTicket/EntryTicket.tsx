import { FC, ReactElement } from 'react';

import { CountTickets } from 'src/components/common';

import { ticketBtnLabelClassesTypes } from 'src/components/common/countTickets/ticketCounter/ticketBtnLabel/types';
import { TicketCounterClassesTypes } from 'src/components/common/countTickets/ticketCounter/types';
import {
  countTicketsClassesTypes,
  ticketsHeadingsTypes
} from 'src/components/common/countTickets/types';

type EntryTicketPropsTypes = {
  heading: string;
  ticketHeadings: ticketsHeadingsTypes[];
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
};

export const EntryTicket: FC<EntryTicketPropsTypes> = ({
  heading,
  ticketHeadings,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses
}): ReactElement => (
  <div className='entry-ticket'>
    <CountTickets
      heading={heading}
      ticketHeadings={ticketHeadings}
      countTicketsClasses={countTicketsClasses}
      ticketCounterClasses={ticketCounterClasses}
      ticketBtnLabelClasses={ticketBtnLabelClasses}
    />
  </div>
);

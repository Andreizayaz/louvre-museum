import { FC, ReactElement } from 'react';
import { CountTickets } from 'src/components/common';

type EntryTicketPropsTypes = {
  heading: string;
};

export const EntryTicket: FC<EntryTicketPropsTypes> = (): ReactElement => (
  <div className='entry-ticket'>
    <CountTickets />
  </div>
);

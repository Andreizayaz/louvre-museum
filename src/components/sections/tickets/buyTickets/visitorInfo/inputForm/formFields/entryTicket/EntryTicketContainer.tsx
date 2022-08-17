import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectTicket } from 'src/store/Tickets';

import { getTicketsCountHeading } from '../helpers';

import { EntryTicket } from './EntryTicket';

import {
  ticketHeadings,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses
} from './data';

import './EntryTicket.scss';

const EntryTicketContainer: FC = (): ReactElement => {
  const { ticketType } = useSelector(selectTicket);

  const [t1] = useTranslation('translation', {
    keyPrefix: 'buy_tickets'
  });

  const [t2] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  return (
    <EntryTicket
      heading={t2('entry_ticket')}
      ticketHeadings={ticketHeadings.map(({ translationKey, type }) =>
        getTicketsCountHeading(`${t1(translationKey)}`, type, ticketType)
      )}
      countTicketsClasses={countTicketsClasses}
      ticketCounterClasses={ticketCounterClasses}
      ticketBtnLabelClasses={ticketBtnLabelClasses}
    />
  );
};

export default EntryTicketContainer;

EntryTicketContainer.displayName = 'EntryTicketContainer';

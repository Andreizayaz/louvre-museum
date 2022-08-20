import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { EntryTicket } from './EntryTicket';

import {
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses
} from './data';

import './EntryTicket.scss';

const EntryTicketContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  return (
    <EntryTicket
      heading={t('entry_ticket')}
      countTicketsClasses={countTicketsClasses}
      ticketCounterClasses={ticketCounterClasses}
      ticketBtnLabelClasses={ticketBtnLabelClasses}
    />
  );
};

export default EntryTicketContainer;

EntryTicketContainer.displayName = 'EntryTicketContainer';

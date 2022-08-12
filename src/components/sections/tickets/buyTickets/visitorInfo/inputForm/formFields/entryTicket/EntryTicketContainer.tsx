import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { EntryTicket } from './EntryTicket';

const EntryTicketContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });
  return <EntryTicket heading={t('entry_ticket')} />;
};

export default EntryTicketContainer;

EntryTicketContainer.displayName = 'EntryTicketContainer';

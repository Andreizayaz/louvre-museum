import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { CountTickets } from './CountTickets';

import { ticketHeadings } from './data';

const CountTicketsContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  return (
    <CountTickets
      counterHeadings={ticketHeadings.map(({ translationKey }) => {
        return { heading: `${t(`${translationKey}`)}+` };
      })}
      total={t('total')}
      btnText={t('buy_btn')}
    />
  );
};

export default CountTicketsContainer;
CountTicketsContainer.displayName = 'CountTicketsContainer';

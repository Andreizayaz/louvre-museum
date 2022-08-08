import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectTicket } from 'src/store/Tickets';

import { useTicketsContext } from '../ticketsContext';

import { CountTickets } from './CountTickets';

import { getBtnNames, getTicketsCount } from './helpers';

import { ticketHeadings } from './data';

import './CountTickets.scss';

const CountTicketsContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const { btnNames } = useTicketsContext();
  const { basicTicketCount, seniorTicketCount, totalPrice } =
    useSelector(selectTicket);

  return (
    <CountTickets
      counterHeadings={ticketHeadings.map(({ translationKey, type }) => {
        return {
          heading: `${t(`${translationKey}`)}+`,
          btnNames: getBtnNames(btnNames, type),
          ticketsCount: getTicketsCount(
            basicTicketCount,
            seniorTicketCount,
            type
          )
        };
      })}
      heading={t('amount')}
      total={t('total')}
      totalPrice={totalPrice}
      btnText={t('buy_btn')}
    />
  );
};

export default CountTicketsContainer;
CountTicketsContainer.displayName = 'CountTicketsContainer';

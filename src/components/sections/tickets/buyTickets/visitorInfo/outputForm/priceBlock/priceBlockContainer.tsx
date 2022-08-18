import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectTicket } from 'src/store/Tickets';
import {
  getTotalPriceByCategories,
  getTicketsCountHeading
} from '../../helpers';

import { BASIC_TICKET_TYPE, SENIOR_TICKET_TYPE } from 'src/constants';

import { PriceBlock } from './PriceBlock';

import './PriceBlock.scss';

const PriceBlockContainer: FC = (): ReactElement => {
  const { basicTicketCount, seniorTicketCount, totalPrice, ticketType } =
    useSelector(selectTicket);
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const { basicTotalPrice, seniorTotalPrice } = getTotalPriceByCategories(
    ticketType,
    basicTicketCount,
    seniorTicketCount
  );

  const priceCategoryData = [
    {
      count: basicTicketCount,
      perPriceText: getTicketsCountHeading(
        t('basic'),
        BASIC_TICKET_TYPE,
        ticketType
      ).heading,
      totalPriceByCategory: `${basicTotalPrice} \u20AC`
    },
    {
      count: seniorTicketCount,
      perPriceText: getTicketsCountHeading(
        t('senior'),
        SENIOR_TICKET_TYPE,
        ticketType
      ).heading,
      totalPriceByCategory: `${seniorTotalPrice} \u20AC`
    }
  ];
  return (
    <PriceBlock
      categoryPrice={priceCategoryData}
      totalText={t('total')}
      totalCount={`${totalPrice} \u20AC`}
    />
  );
};

export default PriceBlockContainer;
PriceBlockContainer.displayName = 'PriceBlockContainer';

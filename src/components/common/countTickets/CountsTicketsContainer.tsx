import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import { CountTickets } from './CountTickets';

import { countTicketsClassesTypes } from './types';
import { TicketCounterClassesTypes } from './ticketCounter/types';
import { ticketBtnLabelClassesTypes } from './ticketCounter/ticketBtnLabel/types';

import { getBtnNames, getTicketsCountByCategory } from './helpers';

import { btnNames, ticketHeadings } from './data';
import {
  BASIC_MINUS,
  BASIC_PLUS,
  SENIOR_MINUS,
  SENIOR_PLUS
} from 'src/constants';
import {
  getTicketsCount,
  getTotalPrice
} from 'src/components/sections/tickets/buyTickets/helpers';

type CountTicketsContainerPropsTypes = {
  heading: string;
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
  isPriceWrapper?: boolean;
  isDisabledBuyBtn?: boolean;
};

const CountTicketsContainer: FC<CountTicketsContainerPropsTypes> = ({
  heading,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses,
  isPriceWrapper,
  isDisabledBuyBtn
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const { basicTicketCount, seniorTicketCount, totalPrice } =
    useSelector(selectTicket);

  const visitorData: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const counterHeadings = ticketHeadings.map(({ translationKey, type }) => {
    return { heading: `${t(translationKey)}+`, type };
  });

  const dispatch = useDispatch();

  const handleClick = (e: any) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === BASIC_MINUS || name === BASIC_PLUS) {
      visitorData.basicTicketCount = getTicketsCount(
        name as string,
        visitorData.basicTicketCount
      );
    }

    if (name === SENIOR_MINUS || name === SENIOR_PLUS) {
      visitorData.seniorTicketCount = getTicketsCount(
        name as string,
        visitorData.seniorTicketCount
      );
    }

    visitorData.totalPrice = getTotalPrice(
      visitorData.ticketType,
      visitorData.basicTicketCount,
      visitorData.seniorTicketCount
    );

    dispatch(setTicketInfo(visitorData));
  };

  return (
    <CountTickets
      counterHeadings={counterHeadings.map(({ heading, type }) => {
        return {
          heading: heading,
          btnNames: getBtnNames(btnNames, type),
          ticketsCount: getTicketsCountByCategory(
            basicTicketCount,
            seniorTicketCount,
            type
          )
        };
      })}
      countTicketsClasses={countTicketsClasses}
      ticketCounterClasses={ticketCounterClasses}
      ticketBtnLabelClasses={ticketBtnLabelClasses}
      heading={heading}
      total={t('total')}
      totalPrice={totalPrice}
      btnText={t('buy_btn')}
      isPriceWrapper={isPriceWrapper}
      isDisabledBuyBtn={isDisabledBuyBtn}
      handleClick={handleClick}
    />
  );
};

export default CountTicketsContainer;
CountTicketsContainer.displayName = 'CountTicketsContainer';

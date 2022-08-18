import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectTicket } from 'src/store/Tickets';

import { useTicketsContext } from 'src/components/sections/tickets/buyTickets/ticketsContext';

import { CountTickets } from './CountTickets';

import { countTicketsClassesTypes, ticketsHeadingsTypes } from './types';
import { TicketCounterClassesTypes } from './ticketCounter/types';
import { ticketBtnLabelClassesTypes } from './ticketCounter/ticketBtnLabel/types';

import { getBtnNames, getTicketsCount } from './helpers';

type CountTicketsContainerPropsTypes = {
  heading: string;
  ticketHeadings: ticketsHeadingsTypes[];
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
  isPriceWrapper?: boolean;
  isDisabledBuyBtn?: boolean;
};

const CountTicketsContainer: FC<CountTicketsContainerPropsTypes> = ({
  heading,
  ticketHeadings,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses,
  isPriceWrapper,
  isDisabledBuyBtn
}): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const { btnNames } = useTicketsContext();
  const { basicTicketCount, seniorTicketCount, totalPrice } =
    useSelector(selectTicket);

  return (
    <CountTickets
      counterHeadings={ticketHeadings.map(({ heading, type }) => {
        return {
          heading: heading,
          btnNames: getBtnNames(btnNames, type),
          ticketsCount: getTicketsCount(
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
    />
  );
};

export default CountTicketsContainer;
CountTicketsContainer.displayName = 'CountTicketsContainer';

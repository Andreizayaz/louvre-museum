import { FC, ReactElement } from 'react';

import { TicketCounter } from './ticketCounter';
import { CountTicketsContext } from './countTicketsContext';

import { TicketCounterClassesTypes } from './ticketCounter/types';
import { ticketBtnLabelClassesTypes } from './ticketCounter/ticketBtnLabel/types';
import { counterHeadingsType, countTicketsClassesTypes } from './types';

type CountTicketsPropsTypes = {
  counterHeadings: counterHeadingsType[];
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
  heading: string;
  isPriceWrapper?: boolean;
  isDisabledBuyBtn?: boolean;
  total: string;
  totalPrice: number;
  btnText: string;
};

export const CountTickets: FC<CountTicketsPropsTypes> = ({
  counterHeadings,
  countTicketsClasses: {
    countTickets,
    amount,
    amountHeading,
    priceWrapper,
    countTicketsTotal,
    btnWrapper,
    buyBtn
  },
  ticketCounterClasses,
  ticketBtnLabelClasses,
  heading,
  isPriceWrapper = false,
  isDisabledBuyBtn = true,
  total,
  totalPrice,
  btnText
}): ReactElement => (
  <div className={countTickets}>
    <div className={amount}>
      <h3 className={amountHeading}>{heading}</h3>
      {counterHeadings.map(({ heading, btnNames, ticketsCount }) => (
        <CountTicketsContext.Provider
          key={heading}
          value={{ heading, btnNames, ticketsCount }}
        >
          <TicketCounter
            key={heading}
            counterHeading={heading}
            ticketCounterClasses={ticketCounterClasses}
            ticketBtnLabelClasses={ticketBtnLabelClasses}
          />
        </CountTicketsContext.Provider>
      ))}
    </div>
    {isPriceWrapper && (
      <div className={priceWrapper}>
        <h4 className={countTicketsTotal}>
          {total} &euro; {totalPrice}
        </h4>
        <div className={btnWrapper}>
          <button className={buyBtn} disabled={isDisabledBuyBtn}>
            {btnText}
          </button>
        </div>
      </div>
    )}
  </div>
);

import { FC, FormEvent, ReactElement } from 'react';

import { CountTickets } from 'src/components/common';

import { TicketCounterClassesTypes } from 'src/components/common/countTickets/ticketCounter/types';
import { ticketBtnLabelClassesTypes } from 'src/components/common/countTickets/ticketCounter/ticketBtnLabel/types';

import {
  countTicketsClassesTypes,
  ticketsHeadingsTypes
} from 'src/components/common/countTickets/types';

import { RadioOptionsGroup } from './radioOptionsGroup';

type BuyTicketsFormPropsTypes = {
  heading: string;
  ticketHeadings: ticketsHeadingsTypes[];
  countTicketsClasses: countTicketsClassesTypes;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
  isPriceWrapper: boolean;
  isDisabledBuyBtn: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const BuyTicketsForm: FC<BuyTicketsFormPropsTypes> = ({
  heading,
  ticketHeadings,
  countTicketsClasses,
  ticketCounterClasses,
  ticketBtnLabelClasses,
  isPriceWrapper,
  isDisabledBuyBtn,
  handleSubmit
}): ReactElement => (
  <div className='buy-tickets'>
    <form className='buy-tickets__form' onSubmit={handleSubmit}>
      <RadioOptionsGroup />
      <CountTickets
        heading={heading}
        ticketHeadings={ticketHeadings}
        countTicketsClasses={countTicketsClasses}
        ticketCounterClasses={ticketCounterClasses}
        ticketBtnLabelClasses={ticketBtnLabelClasses}
        isPriceWrapper={isPriceWrapper}
        isDisabledBuyBtn={isDisabledBuyBtn}
      />
    </form>
  </div>
);

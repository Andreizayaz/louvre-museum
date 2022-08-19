import { FC, ReactElement } from 'react';

import { TicketBtnLabel } from './ticketBtnLabel';

import { ticketBtnLabelClassesTypes } from './ticketBtnLabel/types';

import { TicketCounterClassesTypes } from './types';

type TicketCounterPropsTypes = {
  counterHeading: string;
  ticketCounterClasses: TicketCounterClassesTypes;
  ticketBtnLabelClasses: ticketBtnLabelClassesTypes;
};

export const TicketCounter: FC<TicketCounterPropsTypes> = ({
  counterHeading,
  ticketCounterClasses: { ticketCounter, ticketCounterHeading },
  ticketBtnLabelClasses
}): ReactElement => (
  <div className={ticketCounter}>
    <h4 className={ticketCounterHeading}>{counterHeading}</h4>
    <TicketBtnLabel classesTicketBtnLabel={ticketBtnLabelClasses} />
  </div>
);

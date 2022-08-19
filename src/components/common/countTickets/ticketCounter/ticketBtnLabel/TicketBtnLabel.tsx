import { FC, ReactElement } from 'react';

import { TicketsCountAlert } from './ticketsCountAlert';

import { ticketBtnLabelClassesTypes } from './types';

type TicketBtnLabelPropsTypes = {
  ticketCounter: number;
  minusName: string;
  plusName: string;
  classesTicketBtnLabel: ticketBtnLabelClassesTypes;
  negativeAlert: string;
  maxAlert: string;
  isMin: boolean;
  isMax: boolean;
  isMinBtnDisabled: boolean;
  isMaxBtnDisabled: boolean;
  handleClick: (e: any) => void;
};

export const TicketBtnLabel: FC<TicketBtnLabelPropsTypes> = ({
  ticketCounter,
  minusName,
  plusName,
  classesTicketBtnLabel: {
    ticketBtnLabel,
    ticketBtnLabelBtn,
    btnMinus,
    btnPlus,
    ticketBtnLabelText
  },
  negativeAlert,
  maxAlert,
  isMin,
  isMax,
  isMinBtnDisabled,
  isMaxBtnDisabled,
  handleClick
}): ReactElement => (
  <>
    {isMin && <TicketsCountAlert alertText={negativeAlert} />}
    <div className={ticketBtnLabel}>
      <button
        className={[ticketBtnLabelBtn, btnMinus].join(' ')}
        name={minusName}
        onClick={(e) => handleClick(e)}
        disabled={isMinBtnDisabled}
      ></button>
      <p className={ticketBtnLabelText}>{ticketCounter}</p>
      <button
        className={[ticketBtnLabelBtn, btnPlus].join(' ')}
        name={plusName}
        onClick={(e) => handleClick(e)}
        disabled={isMaxBtnDisabled}
      ></button>
    </div>
    {isMax && <TicketsCountAlert alertText={maxAlert} />}
  </>
);

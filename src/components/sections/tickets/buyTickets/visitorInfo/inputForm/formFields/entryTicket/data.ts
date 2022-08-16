import { BASIC_TICKET_TYPE, SENIOR_TICKET_TYPE } from 'src/constants';

export const ticketHeadings = [
  { translationKey: 'basic_18', type: BASIC_TICKET_TYPE },
  { translationKey: 'senior_65', type: SENIOR_TICKET_TYPE }
];

export const btnNames = {
  basic: { minus: 'basic-minus', plus: 'basic-plus' },
  senior: { minus: 'senior-minus', plus: 'senior-plus' }
};

export const countTicketsClasses = {
  countTickets: 'entry-count-tickets',
  amount: 'entry-count-tickets__entry entry',
  amountHeading: 'entry__heading'
};

export const ticketCounterClasses = {
  ticketCounter: 'entry-ticket-counter',
  ticketCounterHeading: 'entry-ticket-counter__heading'
};

export const ticketBtnLabelClasses = {
  ticketBtnLabel: 'entry-btn-label',
  ticketBtnLabelBtn: 'entry-btn-label__btn',
  btnMinus: 'entry-btn_minus',
  btnPlus: 'entry-btn_plus',
  ticketBtnLabelText: 'entry-btn-label__text'
};

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
  countTickets: 'count-tickets',
  amount: 'count-tickets__amount amount',
  amountHeading: 'amount__heading',
  priceWrapper: 'count-tickets__price-wrapper',
  countTicketsTotal: 'count-tickets__total',
  btnWrapper: 'count-tickets__btn-wrapper',
  buyBtn: 'buy-btn'
};

export const ticketCounterClasses = {
  ticketCounter: 'ticket-counter',
  ticketCounterHeading: 'ticket-counter__heading'
};

export const ticketBtnLabelClasses = {
  ticketBtnLabel: 'ticket-btn-label',
  ticketBtnLabelBtn: 'ticket-btn-label__btn',
  btnMinus: 'btn_minus',
  btnPlus: 'btn_plus',
  ticketBtnLabelText: 'ticket-btn-label__text'
};

import { BASIC_TICKET_TYPE, SENIOR_TICKET_TYPE } from 'src/constants';

export const ticketHeadings = [
  { translationKey: 'basic_18', type: BASIC_TICKET_TYPE },
  { translationKey: 'senior_65', type: SENIOR_TICKET_TYPE }
];

export const btnNames = {
  basic: { minus: 'basic-minus', plus: 'basic-plus' },
  senior: { minus: 'senior-minus', plus: 'senior-plus' }
};

import { namesContent } from 'src/components/sections/tickets/buyTickets/ticketsContext';

export type counterHeadingsType = {
  heading: string;
  btnNames: namesContent;
  ticketsCount: number;
};

export type countTicketsClassesTypes = {
  countTickets: string;
  amount: string;
  amountHeading: string;
  priceWrapper?: string;
  countTicketsTotal?: string;
  btnWrapper?: string;
  buyBtn?: string;
};

export type ticketsHeadingsTypes = {
  heading: string;
  type: string;
};

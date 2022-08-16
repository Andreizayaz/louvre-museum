import { ticketsHeadingsTypes } from 'src/components/common/countTickets/types';
import {
  TEMPORARY_EXHIBITION,
  PERMANENT_EXHIBITION,
  COMBINED_ADMISSION,
  TEMPORARY_BASIC,
  TEMPORARY_SENIOR,
  PERMANENT_BASIC,
  PERMANENT_SENIOR,
  COMBINED_BASIC,
  COMBINED_SENIOR,
  BASIC_TICKET_TYPE,
  SENIOR_TICKET_TYPE
} from 'src/constants';

import { totalPriceObjectType } from './types';

const getZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const getVisitDate = (date: Date): string => date.toLocaleDateString();

export const getVisitTime = (date: Date): string =>
  `${getZero(date.getHours())} : ${getZero(date.getMinutes())}`;

const getTotalPriceByCategories = (
  ticketType: string,
  basicTicketsCount: number,
  seniorTicketsCount: number
): totalPriceObjectType => {
  switch (ticketType) {
    case TEMPORARY_EXHIBITION:
      return {
        basicTotalPrice: basicTicketsCount * TEMPORARY_BASIC,
        seniorTotalPrice: seniorTicketsCount * TEMPORARY_SENIOR
      };
    case PERMANENT_EXHIBITION:
      return {
        basicTotalPrice: basicTicketsCount * PERMANENT_BASIC,
        seniorTotalPrice: seniorTicketsCount * PERMANENT_SENIOR
      };
    case COMBINED_ADMISSION:
      return {
        basicTotalPrice: basicTicketsCount * COMBINED_BASIC,
        seniorTotalPrice: seniorTicketsCount * COMBINED_SENIOR
      };
    default:
      return {
        basicTotalPrice: 0,
        seniorTotalPrice: 0
      };
  }
};

export const getTicketsCountHeading = (
  heading: string,
  type: string,
  ticketType: string,
  basicTicketsCount: number,
  seniorTicketsCount: number
): ticketsHeadingsTypes => {
  const { basicTotalPrice, seniorTotalPrice } = getTotalPriceByCategories(
    ticketType,
    basicTicketsCount,
    seniorTicketsCount
  );

  if (type === BASIC_TICKET_TYPE) {
    return {
      heading: `${heading}+ (${basicTotalPrice} \u20AC)`,
      type
    };
  }

  if (type === SENIOR_TICKET_TYPE) {
    return {
      heading: `${heading}+ (${seniorTotalPrice} \u20AC)`,
      type
    };
  }

  return {
    heading: '',
    type: ''
  };
};

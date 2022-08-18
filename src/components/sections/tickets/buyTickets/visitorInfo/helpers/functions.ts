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

import { ticketsHeadingsTypes } from 'src/components/common/countTickets/types';

import { totalPriceObjectType, pricePerCategoryType } from './types';

export const getTotalPriceByCategories = (
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

const getPricePerCategory = (ticketType: string): pricePerCategoryType => {
  switch (ticketType) {
    case TEMPORARY_EXHIBITION:
      return {
        basicPrice: TEMPORARY_BASIC,
        seniorPrice: TEMPORARY_SENIOR
      };
    case PERMANENT_EXHIBITION:
      return {
        basicPrice: PERMANENT_BASIC,
        seniorPrice: PERMANENT_SENIOR
      };
    case COMBINED_ADMISSION:
      return {
        basicPrice: COMBINED_BASIC,
        seniorPrice: COMBINED_SENIOR
      };
    default:
      return {
        basicPrice: 0,
        seniorPrice: 0
      };
  }
};

export const getTicketsCountHeading = (
  heading: string,
  type: string,
  ticketType: string
): ticketsHeadingsTypes => {
  const { basicPrice, seniorPrice } = getPricePerCategory(ticketType);

  if (type === BASIC_TICKET_TYPE) {
    return {
      heading: `${heading}+ (${basicPrice} \u20AC)`,
      type
    };
  }

  if (type === SENIOR_TICKET_TYPE) {
    return {
      heading: `${heading}+ (${seniorPrice} \u20AC)`,
      type
    };
  }

  return {
    heading: '',
    type: ''
  };
};

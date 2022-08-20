import {
  BASIC_TICKET_TYPE,
  MAX_TICKETS_COUNT,
  SENIOR_TICKET_TYPE
} from 'src/constants';
import { btnNamesType, namesContent } from './types';

export const getBtnNames = (
  btnNames: btnNamesType,
  currentType: string
): namesContent => {
  switch (currentType) {
    case BASIC_TICKET_TYPE:
      return btnNames.basic;
    case SENIOR_TICKET_TYPE:
      return btnNames.senior;
    default:
      return { minus: '', plus: '' };
  }
};

export const getTicketsCountByCategory = (
  basicCount: number,
  seniorCount: number,
  currentType: string
): number => {
  switch (currentType) {
    case BASIC_TICKET_TYPE:
      return basicCount;
    case SENIOR_TICKET_TYPE:
      return seniorCount;
    default:
      return 0;
  }
};

export const isMinAlert = (countTickets: number): boolean =>
  countTickets === 0 ? true : false;

export const isMaxAlert = (countTickets: number): boolean =>
  countTickets === MAX_TICKETS_COUNT ? true : false;

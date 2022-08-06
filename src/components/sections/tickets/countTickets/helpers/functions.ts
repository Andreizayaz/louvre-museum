import { BASIC_TICKET_TYPE, SENIOR_TICKET_TYPE } from 'src/constants';
import { btnNamesType, namesContent } from '../../ticketsContext';

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

export const getTicketsCount = (
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

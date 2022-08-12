import {
  TEMPORARY_EXHIBITION,
  PERMANENT_EXHIBITION,
  COMBINED_ADMISSION,
  TEMPORARY_BASIC,
  PERMANENT_BASIC,
  COMBINED_BASIC,
  TEMPORARY_SENIOR,
  PERMANENT_SENIOR,
  COMBINED_SENIOR,
  BASIC_PLUS,
  BASIC_MINUS,
  SENIOR_PLUS,
  SENIOR_MINUS,
  MAX_TICKETS_COUNT
} from 'src/constants';

export const getTotalPrice = (
  ticketType: string,
  basicTicketCount: number,
  seniorTicketCount: number
): number => {
  switch (ticketType) {
    case TEMPORARY_EXHIBITION:
      return (
        basicTicketCount * TEMPORARY_BASIC +
        seniorTicketCount * TEMPORARY_SENIOR
      );
    case PERMANENT_EXHIBITION:
      return (
        basicTicketCount * PERMANENT_BASIC +
        seniorTicketCount * PERMANENT_SENIOR
      );
    case COMBINED_ADMISSION:
      return (
        basicTicketCount * COMBINED_BASIC + seniorTicketCount * COMBINED_SENIOR
      );

    default:
      return 0;
  }
};

export const getTicketsCount = (
  ticketAction: string,
  ticketsCount: number
): number => {
  if (ticketAction === BASIC_MINUS || ticketAction === SENIOR_MINUS) {
    if (ticketsCount === 0) {
      return 0;
    }
    return ticketsCount - 1;
  } else if (ticketAction === BASIC_PLUS || ticketAction === SENIOR_PLUS) {
    if (ticketsCount === MAX_TICKETS_COUNT) {
      return ticketsCount;
    }
    return ticketsCount + 1;
  } else {
    return 0;
  }
};

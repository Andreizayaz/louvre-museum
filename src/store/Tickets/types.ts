export type VisitorType = {
  ticketType: string;
  basicTicketCount: number;
  seniorTicketCount: number;
  totalPrice: number;
  dateVisit: string;
  timeVisit: string;
  name: string;
  mail: string;
  phone: string;
};

export type VisitorAction = {
  payload: VisitorType;
};

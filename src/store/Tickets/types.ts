export type VisitorType = {
  ticketType: string;
  basicTicketCount: number;
  seniorTicketCount: number;
  totalPrice: number;
};

export type VisitorAction = {
  payload: VisitorType;
};

export type countTicketsContextType = {
  heading: string;
  btnNames: namesContent;
  ticketsCount: number;
  handleClick: (e: any) => void;
};

export type namesContent = {
  minus: string;
  plus: string;
};

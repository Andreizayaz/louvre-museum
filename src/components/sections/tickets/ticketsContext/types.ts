import { ChangeEvent } from 'react';

export type ticketsContextType = {
  btnNames: btnNamesType;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: any) => void;
};

export type btnNamesType = {
  basic: namesContent;
  senior: namesContent;
};

export type namesContent = {
  minus: string;
  plus: string;
};

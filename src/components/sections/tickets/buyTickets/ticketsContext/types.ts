import { ChangeEvent } from 'react';

export type ticketsContextType = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

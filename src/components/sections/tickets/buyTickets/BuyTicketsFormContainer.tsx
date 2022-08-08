import React, {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useState
} from 'react';
import { useDispatch } from 'react-redux';

import { setTicketInfo } from 'src/store/Tickets';

import { TicketsContext } from './ticketsContext';

import { BuyTicketsForm } from './BuyTicketsForm';

import './BuyTicketsForm.scss';

const BuyTicketsFormContainer: FC = (): ReactElement => {
  const [visitorData, setVisitorData] = useState({
    ticketType: '',
    basicTicketCount: 0,
    seniorTicketCount: 0,
    totalPrice: 0
  });

  const dispatch = useDispatch();

  const btnNames = {
    basic: { minus: 'basic-minus', plus: 'basic-plus' },
    senior: { minus: 'senior-minus', plus: 'senior-plus' }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVisitorData({ ...visitorData, ticketType: e.target.value });
    dispatch(setTicketInfo({ ...visitorData, ticketType: e.target.value }));
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e.target.name);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <TicketsContext.Provider value={{ btnNames, handleChange, handleClick }}>
      <BuyTicketsForm handleSubmit={handleSubmit} />
    </TicketsContext.Provider>
  );
};

export default BuyTicketsFormContainer;
BuyTicketsFormContainer.displayName = 'BuyTicketsFormContainer';

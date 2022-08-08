import { ChangeEvent, FC, FormEvent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTicket, setTicketInfo } from 'src/store/Tickets';

import {
  BASIC_MINUS,
  BASIC_PLUS,
  SENIOR_MINUS,
  SENIOR_PLUS
} from 'src/constants';

import { TicketsContext } from './ticketsContext';

import { BuyTicketsForm } from './BuyTicketsForm';

import { getTotalPrice, getTicketsCount } from './helpers';

import './BuyTicketsForm.scss';
import { VisitorType } from 'src/store/Tickets/types';

const BuyTicketsFormContainer: FC = (): ReactElement => {
  const visitorData: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const dispatch = useDispatch();

  const btnNames = {
    basic: { minus: 'basic-minus', plus: 'basic-plus' },
    senior: { minus: 'senior-minus', plus: 'senior-plus' }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    visitorData[name] = value;
    visitorData.totalPrice = getTotalPrice(
      visitorData.ticketType,
      visitorData.basicTicketCount,
      visitorData.seniorTicketCount
    );
    dispatch(setTicketInfo(visitorData));
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    const { name } = e.target;

    if (name === BASIC_MINUS || name === BASIC_PLUS) {
      visitorData.basicTicketCount = getTicketsCount(
        name as string,
        visitorData.basicTicketCount
      );
    }

    if (name === SENIOR_MINUS || name === SENIOR_PLUS) {
      visitorData.seniorTicketCount = getTicketsCount(
        name as string,
        visitorData.seniorTicketCount
      );
    }

    visitorData.totalPrice = getTotalPrice(
      visitorData.ticketType,
      visitorData.basicTicketCount,
      visitorData.seniorTicketCount
    );

    dispatch(setTicketInfo(visitorData));
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

import { ChangeEvent, FC, FormEvent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTicket, setTicketInfo } from 'src/store/Tickets';
import { setIsVisitorVisible } from 'src/store/VisitorVisible';
import { selectDisableBuyBtn } from 'src/store/DisabledBuyBtn';
import { setIsDisabledBuyBtn } from 'src/store/DisabledBuyBtn/reducer';
import { VisitorType } from 'src/store/Tickets';

import { TicketsContext } from './ticketsContext';

import { BuyTicketsForm } from './BuyTicketsForm';

import {
  countTicketsClasses,
  ticketBtnLabelClasses,
  ticketCounterClasses
} from './data';

import { getTotalPrice } from './helpers';

import './BuyTicketsForm.scss';

const BuyTicketsFormContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });

  const { basicTicketCount, seniorTicketCount, ticketType } =
    useSelector(selectTicket);

  const visitorData: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const dispatch = useDispatch();
  const isDisabledBuyBtn = useSelector(selectDisableBuyBtn);

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsVisitorVisible(true));
  };

  useEffect(() => {
    dispatch(setIsVisitorVisible(false));
    dispatch(setIsDisabledBuyBtn(true));
  }, []);

  useEffect(() => {
    if (basicTicketCount || seniorTicketCount) {
      dispatch(setIsDisabledBuyBtn(false));
      return;
    }

    if (!basicTicketCount || !seniorTicketCount) {
      dispatch(setIsDisabledBuyBtn(true));
      return;
    }

    return () => {
      dispatch(setIsVisitorVisible(false));
      dispatch(setIsDisabledBuyBtn(true));
    };
  }, [basicTicketCount, seniorTicketCount, ticketType]);

  return (
    <TicketsContext.Provider value={{ handleChange }}>
      <BuyTicketsForm
        heading={t('amount')}
        countTicketsClasses={countTicketsClasses}
        ticketCounterClasses={ticketCounterClasses}
        ticketBtnLabelClasses={ticketBtnLabelClasses}
        isPriceWrapper={true}
        isDisabledBuyBtn={isDisabledBuyBtn}
        handleSubmit={handleSubmit}
      />
    </TicketsContext.Provider>
  );
};

export default BuyTicketsFormContainer;
BuyTicketsFormContainer.displayName = 'BuyTicketsFormContainer';

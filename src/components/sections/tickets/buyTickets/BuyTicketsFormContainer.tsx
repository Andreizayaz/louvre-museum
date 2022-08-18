import { ChangeEvent, FC, FormEvent, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTicket, setTicketInfo } from 'src/store/Tickets';

import {
  BASIC_MINUS,
  BASIC_PLUS,
  SENIOR_MINUS,
  SENIOR_PLUS
} from 'src/constants';

import { VisitorType } from 'src/store/Tickets/types';

import { TicketsContext } from './ticketsContext';

import { BuyTicketsForm } from './BuyTicketsForm';

import { ticketHeadings } from './data';

import {
  btnNames,
  countTicketsClasses,
  ticketBtnLabelClasses,
  ticketCounterClasses
} from './data';

import { getTotalPrice, getTicketsCount } from './helpers';

import './BuyTicketsForm.scss';
import {
  selectIsVisitorVisible,
  setIsVisitorVisible
} from 'src/store/VisitorVisible';
import { selectDisableBuyBtn } from 'src/store/DisabledBuyBtn';
import { setIsDisabledBuyBtn } from 'src/store/DisabledBuyBtn/reducer';

const BuyTicketsFormContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });

  const { basicTicketCount, seniorTicketCount, ticketType } =
    useSelector(selectTicket);

  const visitorData: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const dispatch = useDispatch();
  const isVisibleVisitorInfo = useSelector(selectIsVisitorVisible);
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
    <TicketsContext.Provider value={{ btnNames, handleChange, handleClick }}>
      <BuyTicketsForm
        ticketHeadings={ticketHeadings.map(({ translationKey, type }) => {
          return { heading: `${t(translationKey)}+`, type };
        })}
        heading={t('amount')}
        countTicketsClasses={countTicketsClasses}
        ticketCounterClasses={ticketCounterClasses}
        ticketBtnLabelClasses={ticketBtnLabelClasses}
        isPriceWrapper={true}
        isVisibleVisitorInfo={isVisibleVisitorInfo}
        isDisabledBuyBtn={isDisabledBuyBtn}
        handleSubmit={handleSubmit}
      />
    </TicketsContext.Provider>
  );
};

export default BuyTicketsFormContainer;
BuyTicketsFormContainer.displayName = 'BuyTicketsFormContainer';

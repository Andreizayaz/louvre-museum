import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectTicket } from 'src/store/Tickets';
import { selectErrorObject } from 'src/store/ValidateError';

import { setIsVisitorVisible } from 'src/store/VisitorVisible';

import { EnterButton } from './EnterButton';

import './EnterButton.scss';

const EnterButtonContainer: FC = (): ReactElement => {
  const [isDisabledEnterBtn, setISdisabledEnterBtn] = useState(false);

  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const errorObj = useSelector(selectErrorObject);
  const visitorInfo = useSelector(selectTicket);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsVisitorVisible(false));
  };

  useEffect(() => {
    const {
      basicTicketCount,
      seniorTicketCount,
      dateVisit,
      timeVisit,
      name,
      mail,
      phone,
      ticketType
    } = visitorInfo;
    const visitorData = [dateVisit, timeVisit, name, mail, phone, ticketType];
    const isTicketsCount = basicTicketCount || seniorTicketCount;
    const isVisitorData = visitorData.every((item) => item.trim().length);
    const isError = Object.values(errorObj).every((item) => item.isError);

    if (!isTicketsCount || !isVisitorData || isError) {
      setISdisabledEnterBtn(true);
      return;
    }

    setISdisabledEnterBtn(false);
  }, [errorObj, visitorInfo]);

  return (
    <EnterButton
      btnText={t('book')}
      isDisabled={isDisabledEnterBtn}
      clickHandler={handleClick}
    />
  );
};

export default EnterButtonContainer;
EnterButtonContainer.displayName = 'EnterButtonContainer';

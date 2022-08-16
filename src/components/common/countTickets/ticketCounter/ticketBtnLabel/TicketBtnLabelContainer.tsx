import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useTicketsContext } from 'src/components/sections/tickets/buyTickets/ticketsContext';
import { MAX_TICKETS_COUNT } from 'src/constants';

import { useCountTicketsContext } from '../../countTicketsContext';

import { isMinAlert, isMaxAlert } from '../../helpers';

import { TicketBtnLabel } from './TicketBtnLabel';

import { ticketBtnLabelClassesTypes } from './types';

type TicketBtnLabelContainerPropsTypes = {
  classesTicketBtnLabel: ticketBtnLabelClassesTypes;
};

const TicketBtnLabelContainer: FC<TicketBtnLabelContainerPropsTypes> = ({
  classesTicketBtnLabel
}): ReactElement => {
  const [isMin, setIsMinAlert] = useState(false);
  const [isMax, setIsMaxAlert] = useState(false);
  const [isMinDisabled, setIsMinDisabled] = useState(false);
  const [isMaxDisabled, setIsMaxDisabled] = useState(false);

  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const {
    ticketsCount,
    btnNames: { minus, plus }
  } = useCountTicketsContext();

  const { handleClick } = useTicketsContext();

  useEffect(() => {
    setIsMinAlert(isMinAlert(ticketsCount));
    setIsMaxAlert(isMaxAlert(ticketsCount));
    setIsMinDisabled(isMinAlert(ticketsCount));
    setIsMaxDisabled(isMaxAlert(ticketsCount));
  }, [ticketsCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      isMin && setIsMinAlert(false);
      isMax && setIsMaxAlert(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isMin, isMax]);

  return (
    <TicketBtnLabel
      isMin={isMin}
      isMax={isMax}
      isMinBtnDisabled={isMinDisabled}
      isMaxBtnDisabled={isMaxDisabled}
      classesTicketBtnLabel={classesTicketBtnLabel}
      ticketCounter={ticketsCount}
      minusName={minus}
      plusName={plus}
      negativeAlert={t('min_alert')}
      maxAlert={`${t('max_alert')} ${MAX_TICKETS_COUNT}`}
      handleClick={handleClick}
    />
  );
};

export default TicketBtnLabelContainer;
TicketBtnLabelContainer.displayName = 'TicketBtnLabelContainer';

import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectTicket } from 'src/store/Tickets';

import { useTicketsContext } from '../ticketsContext';

import { RadioOptionsGroup } from './RadioOptionsGroup';

import { optionsLabels } from './data';

import './RadioOptionsGroup.scss';

const RadioOptionsGroupContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const { handleChange } = useTicketsContext();
  const { ticketType } = useSelector(selectTicket);
  return (
    <RadioOptionsGroup
      heading={t('ticket_type')}
      options={optionsLabels.map(({ translationKey }) => {
        return { label: t(`${translationKey}`) };
      })}
      handleChange={handleChange}
      ticketType={ticketType}
    />
  );
};

export default RadioOptionsGroupContainer;
RadioOptionsGroupContainer.displayName = 'RadioOptionsGroupContainer';

import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { InputForm } from './InputForm';

import './InputForm.scss';

const InputFormContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });
  return <InputForm heading={t('booking')} subheading={t('tour_to_louvre')} />;
};

export default InputFormContainer;
InputFormContainer.displayName = 'InputFormContainer';

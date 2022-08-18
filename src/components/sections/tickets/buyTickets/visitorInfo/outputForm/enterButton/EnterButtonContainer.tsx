import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { setIsVisitorVisible } from 'src/store/VisitorVisible';

import { EnterButton } from './EnterButton';

import './EnterButton.scss';

const EnterButtonContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setIsVisitorVisible(false));
  };

  return <EnterButton btnText={t('book')} clickHandler={handleClick} />;
};

export default EnterButtonContainer;
EnterButtonContainer.displayName = 'EnterButtonContainer';

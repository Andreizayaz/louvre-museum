import { FC, ReactElement } from 'react';

import './TicketsCountAlert.scss';

type TicketsCountAlertPropsTypes = {
  alertText: string;
};

export const TicketsCountAlert: FC<TicketsCountAlertPropsTypes> = ({
  alertText
}): ReactElement => <p className='alert-text'>{alertText}</p>;

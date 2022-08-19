import { FC, ReactElement } from 'react';

import { VisitDescription } from './visitDescription';
import { VisitImage } from './visitImage';

import './VisitTime.scss';

export const VisitTime: FC = (): ReactElement => {
  return (
    <div className='visit-time'>
      <VisitDescription />
      <VisitImage />
    </div>
  );
};

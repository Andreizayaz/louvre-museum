import { FC, ReactElement } from 'react';

import { VisitTime } from './visitTime';

export const OutputForm: FC = (): ReactElement => (
  <div className='output-form'>
    <VisitTime />
  </div>
);

import { FC, ReactElement } from 'react';

import { InputForm } from './inputForm';
import { OutputForm } from './outputForm';

export const VisitorInfo: FC = (): ReactElement => (
  <div className='visitor-info-overlay' style={{ display: 'flex' }}>
    <div className='visitor-info'>
      <div className='visitor-info__content content'>
        <InputForm />
        <OutputForm />
      </div>
    </div>
  </div>
);

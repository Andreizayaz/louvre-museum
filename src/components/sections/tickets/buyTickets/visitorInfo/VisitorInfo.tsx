import { FC, ReactElement } from 'react';

import { InputForm } from './inputForm';

export const VisitorInfo: FC = (): ReactElement => (
  <div className='visitor-info-overlay' style={{ display: 'none' }}>
    <div className='visitor-info'>
      <div className='visitor-info__content content'>
        <InputForm />
      </div>
    </div>
  </div>
);

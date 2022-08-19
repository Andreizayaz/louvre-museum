import { FC, ReactElement } from 'react';

import { VisitTime } from './visitTime';
import { PriceBlock } from './priceBlock';
import { WelcomeBlock } from './welcomeBlock';
import { EnterButton } from './enterButton';

import './OutputForm.scss';

export const OutputForm: FC = (): ReactElement => (
  <div className='output-form'>
    <VisitTime />
    <PriceBlock />
    <WelcomeBlock />
    <EnterButton />
  </div>
);

import { FC, ReactElement } from 'react';

import './ScreenResize.scss';

export const ScreenResize: FC = (): ReactElement => (
  <div className='screen-resize'>
    <button className='screen-resize__btn'></button>
  </div>
);

import { FC, ReactElement } from 'react';

import './BackToTopButton.scss';

export const BackToTopButton: FC = (): ReactElement => (
  <div className='top-button'>
    <a href='#header' className='top-button__link'></a>
  </div>
);

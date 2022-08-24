import { FC, ReactElement } from 'react';

import { SocialIcons } from 'src/components/common';

import './BottomNavbar.scss';

export const BottomNavbar: FC = (): ReactElement => (
  <div className='bottom-navbar'>
    <SocialIcons />
  </div>
);

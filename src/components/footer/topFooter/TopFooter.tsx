import { FC, ReactElement } from 'react';

import { Navbar } from 'src/components/common';
import { SocialIcons } from './socialIcons';

import './TopFooter.scss';

type TopFooterPropsTypes = {
  navBarClasses: string;
  listOfLinksClasses: string;
  listItemClasses: string;
  linkClasses: string;
};

export const TopFooter: FC<TopFooterPropsTypes> = ({
  navBarClasses,
  listOfLinksClasses,
  listItemClasses,
  linkClasses
}): ReactElement => (
  <div className='top-footer'>
    <div className='container'>
      <div className='top-footer__content'>
        <div className='logo'></div>
        <Navbar
          classes={{
            navBarClasses: navBarClasses,
            listOfLinksClasses: listOfLinksClasses,
            listItemClasses: listItemClasses,
            linkClasses: linkClasses
          }}
        />
        <SocialIcons />
      </div>
    </div>
  </div>
);

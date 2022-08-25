import { FC, ReactElement } from 'react';

import { TopFooter } from './topFooter';
import { BottomFooter } from './bottomFooter';

type FooterPropsTypes = {
  navBarClasses: string;
  listOfLinksClasses: string;
  listItemClasses: string;
  linkClasses: string;
};

export const Footer: FC<FooterPropsTypes> = ({
  navBarClasses,
  listOfLinksClasses,
  listItemClasses,
  linkClasses
}): ReactElement => (
  <footer className='footer' style={{ display: 'none' }}>
    <div className='footer__content'>
      <TopFooter
        navBarClasses={navBarClasses}
        listOfLinksClasses={listOfLinksClasses}
        listItemClasses={listItemClasses}
        linkClasses={linkClasses}
      />
      <BottomFooter />
    </div>
  </footer>
);

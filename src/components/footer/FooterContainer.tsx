import { FC, ReactElement } from 'react';

import { Footer } from './Footer';

import './Footer.scss';

const FooterContainer: FC = (): ReactElement => {
  const navBarClasses = {
    navBarClasses: 'footer-navbar',
    listOfLinksClasses: 'footer-navbar__footer-links footer-links',
    listItemClasses: 'footer-links__footer-link-item footer-link-item',
    linkClasses: 'footer-link-item__link'
  };
  return <Footer {...navBarClasses} />;
};

export default FooterContainer;
FooterContainer.displayName = 'FooterContainer';

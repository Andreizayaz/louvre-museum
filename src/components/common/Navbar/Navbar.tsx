import { ReactElement, memo } from 'react';

import { NavbarClassesType, LinkTypes } from './types';

type NavbarPropsType = {
  classes: NavbarClassesType;
  arrayOfLinks: LinkTypes[];
};

const Navbar = memo(
  ({ classes, arrayOfLinks }: NavbarPropsType): ReactElement => {
    const { navBarClasses, listOfLinksClasses, listItemClasses, linkClasses } =
      classes;

    return (
      <nav className={navBarClasses} data-testid='navbar'>
        <ul className={listOfLinksClasses} data-testid='links-list'>
          {arrayOfLinks.map(({ href, linkText }) => (
            <li className={listItemClasses} key={linkText}>
              <a href={href} className={linkClasses}>
                {linkText}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

export default Navbar;

Navbar.displayName = 'Navbar';

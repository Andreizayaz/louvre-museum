import { ReactElement, memo } from 'react';

import { NavbarClassesType } from './types';

type NavbarPropsType = {
  classes: NavbarClassesType;
  arrayOfLinks: string[];
};

const Navbar = memo(
  ({ classes, arrayOfLinks }: NavbarPropsType): ReactElement => {
    const { navBarClasses, listOfLinksClasses, listItemClasses, linkClasses } =
      classes;

    return (
      <nav className={navBarClasses} data-testid='navbar'>
        <ul className={listOfLinksClasses} data-testid='links-list'>
          {arrayOfLinks.map((item) => (
            <li className={listItemClasses} key={item}>
              <a className={linkClasses}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
);

export default Navbar;

Navbar.displayName = 'Navbar';

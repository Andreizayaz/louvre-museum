import { ReactElement, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { NavbarClassesType } from './types';

type NavbarPropsType = {
  classes: NavbarClassesType;
};

const Navbar = memo(({ classes }: NavbarPropsType): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'links' });
  const { navBarClasses, listOfLinksClasses, listItemClasses, linkClasses } =
    classes;

  const arrayOfLinks = [
    {
      href: '#virtual-tour',
      linkText: t('visiting')
    },
    {
      href: '#picture-explore',
      linkText: t('explore')
    },
    {
      href: '#video',
      linkText: t('video')
    },
    {
      href: '#gallery',
      linkText: t('gallery')
    },
    {
      href: '#tickets',
      linkText: t('tickets')
    },
    {
      href: '#contacts',
      linkText: t('contacts')
    }
  ];

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
});

export default Navbar;

Navbar.displayName = 'Navbar';

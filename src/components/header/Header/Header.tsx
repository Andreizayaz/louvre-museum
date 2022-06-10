import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Navbar } from '../../common';
import { DropdownMenu } from '../DropdownMenu';

import { ClassesTypes } from './types';

import './Header.scss';

const Header: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'links' });

  const arrayOfLinks: string[] = [
    t('visiting'),
    t('explore'),
    t('video'),
    t('gallery'),
    t('tickets'),
    t('contacts')
  ];

  const classesForNavbar: ClassesTypes = {
    navBarClasses: 'header__navbar navbar',
    listOfLinksClasses: 'navbar__links-list links-list',
    listItemClasses: 'links-list__list-item list-item ',
    linkClasses: 'list-item__link link'
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <a className='header__logo'></a>
        <Navbar classes={classesForNavbar} arrayOfLinks={arrayOfLinks} />
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Header;

Header.displayName = 'Header';

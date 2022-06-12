import { changeLanguage } from 'i18next';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentLanguage } from 'src/store/Language/reducer';
import { selectCurrentLanguage } from 'src/store/Language';

import { Navbar } from '../../common';
import { DropdownMenu } from '../DropdownMenu';

import { languages } from '../data';

import { ClassesTypes, LanguageType } from '../types';

import './Header.scss';

const Header: FC = (): ReactElement => {
  const { code, dir } = useSelector(selectCurrentLanguage);
  const { t } = useTranslation('translation', { keyPrefix: 'links' });

  const dispatch = useDispatch();

  const arrayOfLinks: string[] = [
    t('visiting'),
    t('explore'),
    t('video'),
    t('gallery'),
    t('tickets'),
    t('contacts')
  ];

  const selectLanguage = (code: string) => {
    void changeLanguage(code);
    const currentLanguageCode = localStorage.getItem('i18nextLng') || 'en';

    const currentLanguage: LanguageType = languages.find(
      (l) => l.code === currentLanguageCode
    ) as LanguageType;

    dispatch(setCurrentLanguage(currentLanguage));
  };

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
        <DropdownMenu
          clickHandler={(code: string) => selectLanguage(code)}
          languages={languages}
          currentLanguage={code}
          langDir={dir}
        />
      </div>
    </header>
  );
};

export default Header;

Header.displayName = 'Header';

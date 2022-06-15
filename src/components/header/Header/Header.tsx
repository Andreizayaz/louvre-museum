import { ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { setCurrentLanguage } from 'src/store/Language/reducer';
import { selectCurrentLanguage } from 'src/store/Language';

import { Navbar } from '../../common';
import { DropdownMenu } from '../DropdownMenu';

import { LOCALE_STORAGE_KEY, DEFAULT_LANG } from 'src/constants';
import { languages } from '../data';

import { ClassesTypes, LanguageType } from '../types';

import './Header.scss';

const Header = (): ReactElement => {
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

  const selectLanguage = useCallback(
    (code: string) => {
      void changeLanguage(code);
      const currentLanguageCode =
        localStorage.getItem(LOCALE_STORAGE_KEY) || DEFAULT_LANG;

      const currentLanguage: LanguageType = languages.find(
        (l) => l.code === currentLanguageCode
      ) as LanguageType;

      dispatch(setCurrentLanguage(currentLanguage));
    },
    [code]
  );

  const classesForNavbar: ClassesTypes = {
    navBarClasses: 'header__navbar navbar',
    listOfLinksClasses: 'navbar__links-list links-list',
    listItemClasses: 'links-list__list-item list-item',
    linkClasses: 'list-item__link link'
  };

  return (
    <header className='header' data-testid='header'>
      <div
        className='container header__container'
        data-testid='header-container'
      >
        <a className='header__logo' data-testid='header-logo'></a>
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

import { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

import { DEFAULT_LANG, LOCALE_STORAGE_KEY } from 'src/constants';
import { selectCurrentLanguage } from 'src/store/Language';
import { setCurrentLanguage } from 'src/store/Language/reducer';

import Header from './Header';

import { languages } from '../data';

import { ClassesTypes, LanguageType } from '../types';

import './Header.scss';

const HeaderContainer = (): ReactElement => {
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
    (code: string = DEFAULT_LANG) => {
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

  useEffect(() => {
    if (typeof code !== 'string' || !code.length) {
      selectLanguage();
    }
  }, []);

  const classesForNavbar: ClassesTypes = {
    navBarClasses: 'header__navbar navbar',
    listOfLinksClasses: 'navbar__links-list links-list',
    listItemClasses: 'links-list__list-item list-item',
    linkClasses: 'list-item__link link'
  };

  return (
    <>
      <Header
        arrayOfLinks={arrayOfLinks}
        classesForNavbar={classesForNavbar}
        code={code}
        dir={dir}
        selectLanguage={selectLanguage}
        languages={languages}
      />
    </>
  );
};

export default HeaderContainer;

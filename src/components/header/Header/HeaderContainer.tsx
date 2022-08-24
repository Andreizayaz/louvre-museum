import {
  MouseEvent,
  ReactElement,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeLanguage } from 'i18next';

import { DEFAULT_LANG, LOCALE_STORAGE_KEY } from 'src/constants';
import { selectCurrentLanguage } from 'src/store/Language';
import { setCurrentLanguage } from 'src/store/Language/reducer';

import Header from './Header';

import { languages } from '../data';

import { LanguageType } from '../types';

import './Header.scss';

const HeaderContainer = (): ReactElement => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { code, dir } = useSelector(selectCurrentLanguage);

  const dispatch = useDispatch();

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

  const handleToggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpenMenu(!isOpenMenu);
  };

  const closeAdaptiveNavbar = () => {
    isOpenMenu && setIsOpenMenu(false);
  };

  useEffect(() => {
    if (typeof code !== 'string' || !code.length) {
      selectLanguage();
    }
  }, []);

  return (
    <>
      <Header
        code={code}
        dir={dir}
        languages={languages}
        isOpenMenu={isOpenMenu}
        selectLanguage={selectLanguage}
        handleToggleMenu={handleToggleMenu}
        closeAdaptiveNavbar={closeAdaptiveNavbar}
      />
    </>
  );
};

export default HeaderContainer;

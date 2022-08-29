import { memo, MouseEvent, ReactElement } from 'react';

import { DropdownMenu } from '../DropdownMenu';
import { ToggleMenu } from '../toggleMenu';
import { AdaptiveNavbar } from './adaptiveNavbar';

import { LanguageType } from '../types';

type HeaderPropsType = {
  code: string;
  dir: string;
  languages: LanguageType[];
  isOpenMenu: boolean;
  selectLanguage: (code: string) => void;
  handleToggleMenu: (e: MouseEvent<HTMLButtonElement>) => void;
  closeAdaptiveNavbar: () => void;
};

const Header = memo(
  ({
    selectLanguage,
    handleToggleMenu,
    closeAdaptiveNavbar,
    code,
    dir,
    languages,
    isOpenMenu
  }: HeaderPropsType): ReactElement => (
    <header id='header' className='header' data-testid='header'>
      <div
        className='container header__container'
        data-testid='header-container'
      >
        <a className='header__logo' data-testid='header-logo'></a>
        <AdaptiveNavbar
          isOpenMenu={isOpenMenu}
          closeAdaptiveNavbar={closeAdaptiveNavbar}
        />
        <ToggleMenu
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
        <DropdownMenu
          clickHandler={(code: string) => selectLanguage(code)}
          languages={languages}
          currentLanguage={code}
          langDir={dir}
        />
      </div>
    </header>
  )
);

export default Header;

Header.displayName = 'Header';

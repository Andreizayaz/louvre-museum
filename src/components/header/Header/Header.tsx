import { memo, ReactElement } from 'react';

import { Navbar } from 'src/components/common';
import { DropdownMenu } from '../DropdownMenu';

import { ClassesTypes, LanguageType } from '../types';

type HeaderPropsType = {
  classesForNavbar: ClassesTypes;
  selectLanguage: (code: string) => void;
  code: string;
  dir: string;
  languages: LanguageType[];
};

const Header = memo(
  ({
    classesForNavbar,
    selectLanguage,
    code,
    dir,
    languages
  }: HeaderPropsType): ReactElement => (
    <header id='header' className='header' data-testid='header'>
      <div
        className='container header__container'
        data-testid='header-container'
      >
        <a className='header__logo' data-testid='header-logo'></a>
        <Navbar classes={classesForNavbar} />
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

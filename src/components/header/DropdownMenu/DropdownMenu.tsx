import { ReactElement, memo } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { GlobeIcon } from '../GlobeIcon';

import { GLOBE_ICON_HEIGHT, GLOBE_ICON_WIDTH } from 'src/constants';

import { LanguageType } from '../types';

import './DropdownMenu.scss';

type DropDownPropsType = {
  clickHandler: (code: string) => void;
  languages: LanguageType[];
  currentLanguage: string;
  langDir: string;
};

const DropdownMenu = memo(
  ({
    clickHandler,
    languages,
    currentLanguage,
    langDir
  }: DropDownPropsType): ReactElement => {
    return (
      <PopupState variant='popover' popupId='demo-popup-menu'>
        {(popupState) => (
          <>
            <Button
              className='dropdown-btn'
              variant='contained'
              {...bindTrigger(popupState)}
              data-testid='dropdown-btn'
            >
              <span
                className={langDir === 'rtl' ? 'ml-auto' : 'mr-auto'}
                data-testid='lang-code'
              >
                {currentLanguage}
              </span>
              <GlobeIcon height={GLOBE_ICON_HEIGHT} width={GLOBE_ICON_WIDTH} />
            </Button>
            <Menu {...bindMenu(popupState)} style={{ padding: 0 }}>
              {languages.map(({ code, country_code, name }) => (
                <MenuItem
                  key={code}
                  onClick={popupState.close}
                  style={{ padding: 0 }}
                  disabled={code === currentLanguage}
                >
                  <div
                    className='options'
                    onClick={() => clickHandler(code)}
                    data-testid={code}
                  >
                    <span
                      className={`fi fi-${country_code} options__flag`}
                      data-testid={`flag-${country_code}`}
                    ></span>
                    <span
                      className='options__text'
                      data-testid={`text-${country_code}`}
                    >
                      {name}
                    </span>
                  </div>
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
      </PopupState>
    );
  }
);

export default DropdownMenu;

DropdownMenu.displayName = 'DropdownMenu';

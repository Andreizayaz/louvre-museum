import { FC, ReactElement } from 'react';
import { changeLanguage } from 'i18next';

// import cookies from 'js-cookie';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { GlobeIcon } from '../GlobeIcon';

import { languages } from '../data';

import './DropdownMenu.scss';

const DropdownMenu: FC = (): ReactElement => {
  // const currentLanguageCode = cookies.get('i18next') || 'en';

  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const clickHandler = (code: string) => {
    void changeLanguage(code);
  };

  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <>
          <Button
            className='dropdown-btn'
            variant='contained'
            {...bindTrigger(popupState)}
          >
            <GlobeIcon height={30} width={30} />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {languages.map(({ code, country_code, name }) => (
              <MenuItem key={code} onClick={popupState.close}>
                <div className='options' onClick={() => clickHandler(code)}>
                  <span
                    className={`fi fi-${country_code} options__flag`}
                  ></span>
                  <span className='options__text'>{name}</span>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
};

export default DropdownMenu;

DropdownMenu.displayName = 'DropdownMenu';

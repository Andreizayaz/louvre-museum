import { FC, MouseEvent, ReactElement } from 'react';

import './ToggleMenu.scss';

type ToggleMenuPropsTypes = {
  isOpenMenu: boolean;
  handleToggleMenu: (e: MouseEvent<HTMLButtonElement>) => void;
};

export const ToggleMenu: FC<ToggleMenuPropsTypes> = ({
  isOpenMenu,
  handleToggleMenu
}): ReactElement => {
  return (
    <div
      className={
        isOpenMenu
          ? 'toggle-menu toggle-menu_close'
          : 'toggle-menu toggle-menu_burger'
      }
    >
      <button
        className='toggle-menu__btn'
        onClick={handleToggleMenu}
        data-testid='toggle-menu-button'
      ></button>
    </div>
  );
};

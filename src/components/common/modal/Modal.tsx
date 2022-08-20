import { FC, ReactElement, ReactNode } from 'react';

import { ClickAwayListener } from '@mui/material';

import './Modal.scss';

type ModalPropsTypes = {
  isVisible: boolean;
  children: ReactNode;
  handleClick: () => void;
};

export const Modal: FC<ModalPropsTypes> = ({
  isVisible,
  children,
  handleClick
}): ReactElement => (
  <div
    className={
      isVisible ? 'modal-overlay modal-overlay_visible' : 'modal-overlay'
    }
  >
    <ClickAwayListener onClickAway={handleClick}>
      <div className={isVisible ? 'modal modal_visible' : 'modal'}>
        {children}
      </div>
    </ClickAwayListener>
  </div>
);

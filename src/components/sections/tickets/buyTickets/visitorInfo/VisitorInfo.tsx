import { FC, ReactElement } from 'react';

import { InputForm } from './inputForm';
import { OutputForm } from './outputForm';
import { CloseTicketBtn } from './closeTicketBtn';
import { ClickAwayListener } from '@material-ui/core';

type VisitorInfoPropsTypes = {
  handleClick: () => void;
};

export const VisitorInfo: FC<VisitorInfoPropsTypes> = ({
  handleClick
}): ReactElement => (
  <div className='visitor-info-overlay'>
    <ClickAwayListener onClickAway={handleClick}>
      <div className='visitor-info'>
        <CloseTicketBtn handleClick={handleClick} />
        <div className='visitor-info__content content'>
          <InputForm />
          <OutputForm />
        </div>
      </div>
    </ClickAwayListener>
  </div>
);

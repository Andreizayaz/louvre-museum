import { FC, ReactElement } from 'react';

import './CloseTicketBtn.scss';

type CloseTicketBtnPropsTypes = {
  handleClick: () => void;
};

export const CloseTicketBtn: FC<CloseTicketBtnPropsTypes> = ({
  handleClick
}): ReactElement => (
  <div className='ticket-close'>
    <button className='ticket-close__btn' onClick={handleClick}></button>
  </div>
);

import { FC, ReactElement } from 'react';

import { InputForm } from './inputForm';
import { OutputForm } from './outputForm';
import { CloseTicketBtn } from './closeTicketBtn';

type VisitorInfoPropsTypes = {
  handleClick: () => void;
};

export const VisitorInfo: FC<VisitorInfoPropsTypes> = ({
  handleClick
}): ReactElement => (
  <>
    <CloseTicketBtn handleClick={handleClick} />
    <div className='visitor-info__content content'>
      <InputForm />
      <OutputForm />
    </div>
  </>
);

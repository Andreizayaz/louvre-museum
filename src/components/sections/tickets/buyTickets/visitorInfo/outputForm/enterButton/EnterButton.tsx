import { FC, ReactElement } from 'react';

type EnterButtonPropsTypes = {
  btnText: string;
  clickHandler: () => void;
};

export const EnterButton: FC<EnterButtonPropsTypes> = ({
  btnText,
  clickHandler
}): ReactElement => (
  <div className='enter-button'>
    <button className='enter-button__btn' onClick={clickHandler}>
      {btnText}
    </button>
  </div>
);

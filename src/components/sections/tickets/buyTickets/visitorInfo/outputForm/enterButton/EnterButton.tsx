import { FC, ReactElement } from 'react';

type EnterButtonPropsTypes = {
  btnText: string;
  isDisabled: boolean;
  clickHandler: () => void;
};

export const EnterButton: FC<EnterButtonPropsTypes> = ({
  btnText,
  isDisabled,
  clickHandler
}): ReactElement => (
  <div className='enter-button'>
    <button
      className='enter-button__btn'
      onClick={clickHandler}
      disabled={isDisabled}
    >
      {btnText}
    </button>
  </div>
);

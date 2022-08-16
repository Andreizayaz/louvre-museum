import { FC, ReactElement, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import {
  ACTIVE_BORDER_COLOR,
  COMMON_BORDER_COLOR,
  REB_BORDER_COLOR
} from 'src/constants';

import { ValidateError } from '../validateError';

import { validateInput, normalizePhoneNumber } from '../helpers';

import './InputGroup.scss';

type inputGroupPropsTypes = {
  inputIconClasses: string;
  name: string;
  placeholder: string;
  tabIndexEl: number;
};

export const InputGroup: FC<inputGroupPropsTypes> = ({
  inputIconClasses,
  name,
  placeholder,
  tabIndexEl
}): ReactElement => {
  const [borderColor, setBorderColor] = useState(COMMON_BORDER_COLOR);
  const [errorObj, setErrorObj] = useState({
    isError: false,
    errorText: ''
  });
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const visitorInfo: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const getBorderColor = () =>
    document.activeElement === inputRef.current
      ? setBorderColor(ACTIVE_BORDER_COLOR)
      : setBorderColor(COMMON_BORDER_COLOR);

  const blurHandler = () => {
    const { name, value } = inputRef.current as HTMLInputElement;
    getBorderColor();
    const errorObj = validateInput(name, value);
    setErrorObj(errorObj);
    errorObj.isError
      ? setBorderColor(REB_BORDER_COLOR)
      : setBorderColor(COMMON_BORDER_COLOR);
  };
  const getFocus = () => inputRef.current?.focus();

  const handleChange = () => {
    getBorderColor();
    const { name, value } = inputRef.current as HTMLInputElement;
    visitorInfo[name] = value.trim();
    dispatch(setTicketInfo(visitorInfo));
  };

  return (
    <div className='input-wrapper'>
      <div
        className='input-group'
        onClick={getFocus}
        style={{ borderColor: borderColor }}
      >
        <div className={inputIconClasses}></div>
        <input
          ref={inputRef}
          tabIndex={tabIndexEl}
          type='text'
          className='input'
          placeholder={placeholder}
          name={name}
          value={normalizePhoneNumber(visitorInfo[name] as string)}
          onChange={handleChange}
          onFocus={getBorderColor}
          onBlur={blurHandler}
        />
      </div>
      {errorObj.isError && <ValidateError errorText={errorObj.errorText} />}
    </div>
  );
};

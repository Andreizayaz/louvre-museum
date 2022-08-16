import { ChangeEvent, FC, ReactElement, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import { ACTIVE_BORDER_COLOR, COMMON_BORDER_COLOR } from 'src/constants';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const visitorInfo: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const getBorderColor = () =>
    document.activeElement === inputRef.current
      ? setBorderColor(ACTIVE_BORDER_COLOR)
      : setBorderColor(COMMON_BORDER_COLOR);

  const getFocus = () => inputRef.current?.focus();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    getBorderColor();
    const { name, value } = e.target;
    visitorInfo[name] = value;
    dispatch(setTicketInfo(visitorInfo));
  };

  return (
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
        value={visitorInfo[name]}
        onChange={handleChange}
        onFocus={getBorderColor}
        onBlur={getBorderColor}
      />
    </div>
  );
};

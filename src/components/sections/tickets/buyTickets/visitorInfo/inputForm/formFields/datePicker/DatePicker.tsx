import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ClickAwayListener } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import { ACTIVE_BORDER_COLOR, COMMON_BORDER_COLOR } from 'src/constants';

import { OverlayInput } from '../overlayInput';
import { ValidateError } from '../validateError';

import { getVisitDate } from '../helpers';

import { overlayClasses, styleTransformProps } from './data';

import './DatePicker.scss';

type DatePickerPropsTypes = {
  placeholder: string;
  tabIndexEl: number;
};

const PickDate: FC<DatePickerPropsTypes> = ({
  placeholder,
  tabIndexEl
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValidateError, setIsValidateError] = useState(false);
  const [borderColor, setBorderColor] = useState(COMMON_BORDER_COLOR);

  const dispatch = useDispatch();
  const visitorInfo: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const closeDatePicker = () => {
    setIsOpen(false);
  };

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const changeHandler = (value: any) => {
    visitorInfo.dateVisit = getVisitDate(value as Date);
    dispatch(setTicketInfo(visitorInfo));
  };

  useEffect(() => {
    if (isOpen) {
      setBorderColor(ACTIVE_BORDER_COLOR);
      isValidateError && setIsValidateError(false);
      return;
    }

    setBorderColor(COMMON_BORDER_COLOR);
    !visitorInfo.dateVisit.trim().length && setIsValidateError(true);
  }, [isOpen]);

  return (
    <ClickAwayListener onClickAway={closeDatePicker}>
      <div
        className='date-wrapper'
        tabIndex={tabIndexEl}
        style={{ borderColor: borderColor }}
      >
        <OverlayInput
          overlayClasses={overlayClasses}
          placeholder={
            visitorInfo.dateVisit.trim().length
              ? visitorInfo.dateVisit
              : placeholder
          }
          isOpen={isOpen}
          clickHandler={toggleDatePicker}
          styleTransformProps={styleTransformProps}
          borderColor={borderColor}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value=''
            onChange={(e) => changeHandler(e)}
            renderInput={(params) => <TextField {...params} />}
            closeOnSelect={false}
            open={isOpen}
            minDate={new Date()}
          />
        </LocalizationProvider>
        {isValidateError && <ValidateError errorText={'error'} />}
      </div>
    </ClickAwayListener>
  );
};

export default PickDate;
PickDate.displayName = 'PickDate';

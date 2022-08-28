import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ClickAwayListener } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import {
  ACTIVE_BORDER_COLOR,
  COMMON_BORDER_COLOR,
  REB_BORDER_COLOR
} from 'src/constants';

import { OverlayInput } from '../overlayInput';
import { ValidateError } from '../validateError';

import { getVisitTime } from '../helpers';

import { overlayClasses, styleTransformProps } from './data';

import './TimePicker.scss';
import {
  selectErrorObject,
  setValidateError,
  ValidateErrorsTypes
} from 'src/store/ValidateError';

type TimePickerPropsTypes = { placeholder: string; tabIndexEl: number };

const pickTime: FC<TimePickerPropsTypes> = ({
  placeholder,
  tabIndexEl
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [borderColor, setBorderColor] = useState(COMMON_BORDER_COLOR);
  const [isValidateError, setIsValidateError] = useState(false);

  const dispatch = useDispatch();

  const visitorInfo: VisitorType = JSON.parse(
    JSON.stringify(useSelector(selectTicket))
  );

  const errorObject: ValidateErrorsTypes = JSON.parse(
    JSON.stringify(useSelector(selectErrorObject))
  );

  const toggleTimePicker = () => setIsOpen(!isOpen);

  const changeHandler = (value: any) => {
    visitorInfo.timeVisit = getVisitTime(value as Date);
    dispatch(setTicketInfo(visitorInfo));
  };

  const closeTimePicker = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    errorObject.timeVisit.isError = isValidateError;
    dispatch(setValidateError(errorObject));
  }, [isValidateError]);

  useEffect(() => {
    if (isOpen) {
      setBorderColor(ACTIVE_BORDER_COLOR);
      isValidateError && setIsValidateError(false);
      return;
    }

    if (isValidateError) {
      setBorderColor(REB_BORDER_COLOR);
      return;
    }

    setBorderColor(COMMON_BORDER_COLOR);
    !visitorInfo.timeVisit.trim().length && setIsValidateError(true);
  }, [isOpen, isValidateError]);

  return (
    <ClickAwayListener onClickAway={closeTimePicker}>
      <div className='time-wrapper' tabIndex={tabIndexEl}>
        <OverlayInput
          overlayClasses={overlayClasses}
          styleTransformProps={styleTransformProps}
          borderColor={borderColor}
          placeholder={
            visitorInfo.timeVisit.trim().length
              ? visitorInfo.timeVisit
              : placeholder
          }
          isOpen={isOpen}
          clickHandler={toggleTimePicker}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopTimePicker
            value=''
            onChange={(e) => {
              changeHandler(e);
            }}
            renderInput={(params) => <TextField {...params} />}
            open={isOpen}
            ampm={false}
            ampmInClock={false}
            minTime={new Date(0, 0, 0, 8)}
            maxTime={new Date(0, 0, 0, 22, 0)}
          />
        </LocalizationProvider>
        {isValidateError && (
          <ValidateError errorText={"time field can't be empty"} />
        )}
      </div>
    </ClickAwayListener>
  );
};

export default pickTime;
pickTime.displayName = 'pickTime';

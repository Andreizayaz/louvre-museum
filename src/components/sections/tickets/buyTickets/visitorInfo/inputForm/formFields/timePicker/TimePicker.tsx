import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ClickAwayListener } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { selectTicket, setTicketInfo, VisitorType } from 'src/store/Tickets';
import { ACTIVE_BORDER_COLOR, COMMON_BORDER_COLOR } from 'src/constants';

import { OverlayInput } from '../overlayInput';
import { ValidateError } from '../validateError';

import { getVisitTime } from '../helpers';

import { overlayClasses, styleTransformProps } from './data';

import './TimePicker.scss';

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

  const toggleTimePicker = () => setIsOpen(!isOpen);

  const changeHandler = (value: any) => {
    visitorInfo.timeVisit = getVisitTime(value as Date);
    dispatch(setTicketInfo(visitorInfo));
  };

  const closeTimePicker = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      setBorderColor(ACTIVE_BORDER_COLOR);
      isValidateError && setIsValidateError(false);
      return;
    }

    setBorderColor(COMMON_BORDER_COLOR);
    !visitorInfo.timeVisit.trim().length && setIsValidateError(true);
  }, [isOpen]);

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
          <TimePicker
            value=''
            onChange={(e) => {
              changeHandler(e);
            }}
            renderInput={(params) => <TextField {...params} />}
            open={isOpen}
          />
        </LocalizationProvider>
        {isValidateError && <ValidateError errorText={'error'} />}
      </div>
    </ClickAwayListener>
  );
};

export default pickTime;
pickTime.displayName = 'pickTime';

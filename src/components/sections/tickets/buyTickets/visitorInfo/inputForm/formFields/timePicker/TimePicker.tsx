import { FC, ReactElement, useState } from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import './TimePicker.scss';

type TimePickerPropsTypes = { placeholder: string };

const pickTime: FC<TimePickerPropsTypes> = ({ placeholder }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className='time-wrapper'
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className='time-wrapper__time-overlay'>
        <div className='time-overlay__icon'></div>
        <div className='time-overlay__tex'>{placeholder}</div>
        <div className='time-overlay__arrow'></div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value=''
          onChange={(e) => {
            console.log(e);
          }}
          renderInput={(params) => <TextField {...params} />}
          open={isOpen}
        />
      </LocalizationProvider>
    </div>
  );
};

export default pickTime;
pickTime.displayName = 'pickTime';

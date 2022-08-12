import { FC, ReactElement, useState } from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './DatePicker.scss';

type DatePickerPropsTypes = {
  placeholder: string;
};

const PickDate: FC<DatePickerPropsTypes> = ({ placeholder }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className='date-wrapper'
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className='date-wrapper__date-overlay'>
        <div className='date-overlay__icon'></div>
        <div className='date-overlay__tex'>{placeholder}</div>
        <div className='date-overlay__arrow'></div>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value=''
          onChange={(e) => console.log(e)}
          renderInput={(params) => <TextField {...params} />}
          closeOnSelect={false}
          open={isOpen}
        />
      </LocalizationProvider>
    </div>
  );
};

export default PickDate;
PickDate.displayName = 'PickDate';

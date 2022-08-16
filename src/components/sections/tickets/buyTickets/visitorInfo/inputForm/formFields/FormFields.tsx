import { FC, ReactElement } from 'react';

import { DATE_TYPE, TIME_TYPE } from 'src/constants';

import { DatePicker } from './datePicker';
import { TimePicker } from './timePicker';
import { InputGroup } from './inputGroup';
import { SelectOptions } from './selectOptions';
import { EntryTicket } from './entryTicket';

import {
  inputGroupDataType,
  dateAndTimeType,
  dataForSelectType
} from './types';

type formFieldsPropsTypes = {
  inputGroupData: inputGroupDataType[];
  dateAndTimeData: dateAndTimeType[];
  dataForSelect: dataForSelectType;
};

export const FormFields: FC<formFieldsPropsTypes> = ({
  inputGroupData,
  dateAndTimeData,
  dataForSelect
}): ReactElement => (
  <form className='ticket-form'>
    <div className='ticket-form__date-and-time'>
      {dateAndTimeData.map(({ type, placeholder }, index) => {
        if (type === DATE_TYPE) {
          return (
            <DatePicker
              key={placeholder}
              placeholder={placeholder}
              tabIndexEl={index + 1}
            />
          );
        }
        if (type === TIME_TYPE) {
          return (
            <TimePicker
              key={placeholder}
              placeholder={placeholder}
              tabIndexEl={index + 1}
            />
          );
        }
      })}
    </div>

    {inputGroupData.map(({ iconClasses, name, placeholder }, index) => (
      <InputGroup
        key={name}
        tabIndexEl={index + 3}
        inputIconClasses={iconClasses}
        name={name}
        placeholder={placeholder}
      />
    ))}
    <SelectOptions dataForSelect={dataForSelect} />
    <EntryTicket />
  </form>
);

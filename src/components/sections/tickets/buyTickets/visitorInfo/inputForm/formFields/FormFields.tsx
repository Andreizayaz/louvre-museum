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
  <div className='ticket-form'>
    <div className='ticket-form__date-and-time'>
      {dateAndTimeData.map(({ type, placeholder }) => {
        if (type === DATE_TYPE) {
          return <DatePicker key={placeholder} placeholder={placeholder} />;
        }
        if (type === TIME_TYPE) {
          return <TimePicker key={placeholder} placeholder={placeholder} />;
        }
      })}
    </div>

    {inputGroupData.map(({ iconClasses, name, placeholder }) => (
      <InputGroup
        key={name}
        inputIconClasses={iconClasses}
        name={name}
        placeholder={placeholder}
      />
    ))}
    <SelectOptions dataForSelect={dataForSelect} />
    <EntryTicket />
  </div>
);

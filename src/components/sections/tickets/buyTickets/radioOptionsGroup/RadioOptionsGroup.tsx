import { ChangeEvent, FC, ReactElement } from 'react';

import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { TICKET_TYPE_RADIO_NAME } from 'src/constants';

import { optionsType } from './types';

type RadioOptionsGroupPropsTypes = {
  heading: string;
  options: optionsType[];
  ticketType: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioOptionsGroup: FC<RadioOptionsGroupPropsTypes> = ({
  heading,
  options,
  ticketType,
  handleChange
}): ReactElement => {
  return (
    <div className='radio-options'>
      <h3 className='radio-options__heading'>{heading}</h3>
      <div className='radio-options__options-list'>
        <RadioGroup onChange={(e) => handleChange(e)}>
          {options.map(({ label, value }) => (
            <FormControlLabel
              key={label}
              value={value}
              control={<Radio />}
              label={label}
              name={TICKET_TYPE_RADIO_NAME}
              checked={value === ticketType ? true : false}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

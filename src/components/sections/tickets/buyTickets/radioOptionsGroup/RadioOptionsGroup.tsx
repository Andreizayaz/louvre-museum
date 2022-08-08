import { ChangeEvent, FC, ReactElement } from 'react';

import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

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
          {options.map(({ label }) => (
            <FormControlLabel
              key={label}
              value={label}
              control={<Radio />}
              label={label}
              name={label}
              checked={label === ticketType ? true : false}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

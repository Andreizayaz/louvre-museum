import { FC, ReactElement } from 'react';

import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { optionsType } from './types';

type RadioOptionsGroupPropsTypes = {
  heading: string;
  options: optionsType[];
};

export const RadioOptionsGroup: FC<RadioOptionsGroupPropsTypes> = ({
  heading,
  options
}): ReactElement => {
  return (
    <div className='radio-options'>
      <h3 className='radio-options__heading'>{heading}</h3>
      <div className='radio-options__options-list'>
        <RadioGroup>
          {options.map(({ label }) => (
            <FormControlLabel
              key={label}
              value={label}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

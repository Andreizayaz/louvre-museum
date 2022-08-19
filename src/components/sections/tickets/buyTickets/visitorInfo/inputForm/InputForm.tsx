import { FC, ReactElement } from 'react';

import { MuseumHeading } from './museumHeading';
import { FormFields } from './formFields';

type InputFormPropsTypes = {
  heading: string;
  subheading: string;
};

export const InputForm: FC<InputFormPropsTypes> = ({
  heading,
  subheading
}): ReactElement => (
  <div className='input-form'>
    <MuseumHeading heading={heading} subheading={subheading} />
    <FormFields />
  </div>
);

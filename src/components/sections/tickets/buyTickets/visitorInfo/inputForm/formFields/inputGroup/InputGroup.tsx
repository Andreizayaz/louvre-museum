import { FC, ReactElement } from 'react';

type inputGroupPropsTypes = {
  inputIconClasses: string;
  name: string;
  placeholder: string;
};

export const InputGroup: FC<inputGroupPropsTypes> = ({
  inputIconClasses,
  name,
  placeholder
}): ReactElement => (
  <div className='input-group'>
    <div className={inputIconClasses}></div>
    <input
      type='text'
      className='input'
      placeholder={placeholder}
      name={name}
    />
  </div>
);

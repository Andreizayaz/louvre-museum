import { FC, ReactElement, useState } from 'react';
import Select from 'react-select';

import { dataForSelectType } from '../types';

import './SelectOptions.scss';

type selectOptionsPropsTypes = {
  dataForSelect: dataForSelectType;
};

export const SelectOptions: FC<selectOptionsPropsTypes> = ({
  dataForSelect: { placeholder, options }
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='select-wrapper'>
      <div
        className='select-wrapper__select-placeholder select-placeholder'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='select-placeholder__icon'></div>
        <div className='select-placeholder__text'>{placeholder}</div>
        <div
          className='select-placeholder__arrow'
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        ></div>
      </div>
      <Select
        options={options}
        menuIsOpen={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

import { FC, ReactElement } from 'react';

import './ValidateError.scss';

type ValidateErrorPropsTypes = {
  errorText: string;
};

export const ValidateError: FC<ValidateErrorPropsTypes> = ({
  errorText
}): ReactElement => <p className='validate-error-text'>{errorText}</p>;

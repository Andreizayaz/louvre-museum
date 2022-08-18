import { FC, ReactElement } from 'react';

import './TotalPrice.scss';

type TotalPricePropsTypes = {
  totalText: string;
  totalCount: string;
};

export const TotalPrice: FC<TotalPricePropsTypes> = ({
  totalText,
  totalCount
}): ReactElement => (
  <div className='total-price'>
    <div className='total-price__text'>{totalText}</div>
    <div className='total-price__count'>{totalCount}</div>
  </div>
);

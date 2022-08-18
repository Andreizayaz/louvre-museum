import { FC, ReactElement } from 'react';

import './CategoryPrice.scss';

type CategoryPricePropsTypes = {
  count: number;
  perPriceText: string;
  totalPriceByCategory: string;
};

export const CategoryPrice: FC<CategoryPricePropsTypes> = ({
  count,
  perPriceText,
  totalPriceByCategory
}): ReactElement => (
  <div className='category-price'>
    <div className='category-price__count-and-text'>
      <div className='category-price__tickets-count'>{count}</div>
      <div className='category-price__type-and-per-price'>{perPriceText}</div>
    </div>
    <div className='category-price__total-by-category'>
      {totalPriceByCategory}
    </div>
  </div>
);

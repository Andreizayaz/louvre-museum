import { FC, ReactElement } from 'react';

import { CategoryPrice } from './categoryPrice';
import { TotalPrice } from './totalPrice';

import { categoryPriceTypes } from './types';

type PriceBlockPropsTypes = {
  categoryPrice: categoryPriceTypes[];
  totalText: string;
  totalCount: string;
};

export const PriceBlock: FC<PriceBlockPropsTypes> = ({
  categoryPrice,
  totalText,
  totalCount
}): ReactElement => (
  <div className='price-block'>
    <div className='price-block__count'>
      {categoryPrice.map(({ count, perPriceText, totalPriceByCategory }) => (
        <CategoryPrice
          key={perPriceText}
          count={count}
          perPriceText={perPriceText}
          totalPriceByCategory={totalPriceByCategory}
        />
      ))}
    </div>
    <TotalPrice totalText={totalText} totalCount={totalCount} />
  </div>
);

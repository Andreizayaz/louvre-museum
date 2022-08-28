import { FC, ReactElement } from 'react';

import './BackToTopButton.scss';

export const BackToTopButton: FC = (): ReactElement => {
  const scrollTopHandler = () => window.scrollTo(0, 0);
  return (
    <div className='top-button'>
      <button className='top-button__btn' onClick={scrollTopHandler}></button>
    </div>
  );
};

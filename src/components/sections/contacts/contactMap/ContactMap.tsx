import { FC, ReactElement, useEffect, useState } from 'react';

import { getMapBackgroundImg } from './helpers';

import './ContactMap.scss';

export const ContactMap: FC = (): ReactElement => {
  const [bgImg, setBgImg] = useState('');

  const windowResizeHandler = () => {
    console.log('resize');
    setBgImg(getMapBackgroundImg(window.innerWidth));
  };

  useEffect(() => {
    setBgImg(getMapBackgroundImg(window.innerWidth));
    window.addEventListener('resize', windowResizeHandler);
  }, []);

  return (
    <div
      className='contact-map'
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>
  );
};

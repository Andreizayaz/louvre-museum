import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Swiper as SwiperInstance } from 'swiper';

import { selectCurrentLanguage } from 'src/store/Language';

import { RIGHT_TO_LEFT } from 'src/constants';

import { Tickets } from './Tickets';

import { picturesData } from './data';

import './Tickets.scss';

const TicketsContainer: FC = (): ReactElement => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const { dir } = useSelector(selectCurrentLanguage);
  const [t1] = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const [t2] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.pictures'
  });

  useEffect(() => {
    if (swiper) {
      swiper.rtlTranslate = dir === RIGHT_TO_LEFT;
    }
  }, [swiper, dir]);

  return (
    <Tickets
      manageSwiperState={setSwiper}
      heading={t1('section_heading')}
      pictures={picturesData.map(({ translationKey, imgSrc }) => {
        return { title: t2(`${translationKey}`), imgSrc };
      })}
    />
  );
};

export default TicketsContainer;
TicketsContainer.displayName = 'TicketsContainer';

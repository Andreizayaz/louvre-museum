import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { selectCurrentLanguage } from 'src/store/Language';

import { Button, Typography } from '@mui/material';

import { SwiperSlider } from 'src/components/common';

const Visiting: FC = (): ReactElement => {
  const [t] = useTranslation('translation', {
    keyPrefix: 'welcome_section'
  });
  const { code, dir } = useSelector(selectCurrentLanguage);
  const [siderPosition, setSliderPosition] = useState('visiting__slider_right');

  useEffect(() => {
    dir === 'rtl'
      ? setSliderPosition('visiting__slider_left')
      : setSliderPosition('visiting__slider_right');
  }, [dir]);

  return (
    <div className='visiting'>
      <div className='visiting__container container'>
        <div className='visiting__description description'>
          <Typography
            variant='h2'
            className='description__heading'
            style={{ whiteSpace: code === 'en' ? 'pre' : 'normal' }}
          >
            {t('welcome')}
          </Typography>
          <Typography
            variantMapping={{ body1: 'p' }}
            className='description__text'
          >
            {t('from_the_castle')}
          </Typography>
          <Button className='description__button'>{t('discover_btn')}</Button>
        </div>
        <div className={`visiting__slider slider ${siderPosition}`}>
          <SwiperSlider />
        </div>
      </div>
    </div>
  );
};

export default Visiting;

Visiting.displayName = 'Visiting';

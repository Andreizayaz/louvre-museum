import { Dispatch, FC, ReactElement, SetStateAction } from 'react';

import { Typography } from '@mui/material';

import { Swiper as SwiperInstance } from 'swiper';

import { SwiperSlider } from 'src/components/common';

import { DataForSliderType, PaginationOptionsType } from './types';

import { DISCOVER_LOUVRE_LINK } from 'src/constants';

type VisitingPropsTypes = {
  welcomeText: string;
  descriptionText: string;
  btnText: string;
  code: string;
  sliderPosition: string;
  dataForSlider: DataForSliderType[];
  swiper: SwiperInstance | null;
  manageSwiperState: Dispatch<SetStateAction<SwiperInstance | null>>;
  sliderOptions: PaginationOptionsType;
};

const Visiting: FC<VisitingPropsTypes> = ({
  welcomeText,
  descriptionText,
  btnText,
  code,
  sliderPosition,
  dataForSlider,
  manageSwiperState,
  sliderOptions
}): ReactElement => (
  <section className='visiting'>
    <div className='visiting__container container'>
      <div className='visiting__description description'>
        <Typography
          variant='h2'
          className='description__heading'
          style={{ whiteSpace: code === 'en' ? 'pre' : 'normal' }}
        >
          {welcomeText}
        </Typography>
        <Typography
          variantMapping={{ body1: 'p' }}
          className='description__text'
        >
          {descriptionText}
        </Typography>
        <a
          className='description__button'
          href={DISCOVER_LOUVRE_LINK}
          target='_blank'
          rel='noreferrer'
        >
          {btnText}
        </a>
      </div>
      <div className={`visiting__slider slider ${sliderPosition}`}>
        <SwiperSlider
          dataForSlider={dataForSlider}
          manageSwiperState={manageSwiperState}
          paginationOptions={sliderOptions}
          isFraction={true}
          fractionControlSelector='.controls__fraction'
        />
      </div>
    </div>
  </section>
);

export default Visiting;

Visiting.displayName = 'Visiting';

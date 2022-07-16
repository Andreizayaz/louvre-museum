import { FC, ReactElement, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Swiper as SwiperInstance } from 'swiper';

import { selectCurrentLanguage } from 'src/store/Language';

import { RIGHT_TO_LEFT } from 'src/constants';

import Visiting from './Visiting';

import { pictures } from './data';

import './Visiting.scss';

const VisitingContainer: FC = (): ReactElement => {
  const [t1] = useTranslation('translation', {
    keyPrefix: 'welcome_section.pictures'
  });

  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const [t2] = useTranslation('translation', {
    keyPrefix: 'welcome_section'
  });

  const { code, dir } = useSelector(selectCurrentLanguage);

  const [sliderPosition, setSliderPosition] = useState(
    'visiting__slider_right'
  );

  const galleryPictures = pictures.map((item) => {
    return { src: item.src, text: t1(item.translationKey) };
  });

  const paginationOptions = {
    clickable: true,
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet_active',
    el: '.controls__pagination',
    renderBullet: (index: number, className: string) => {
      return `<span class=${className}></span>`;
    },
    renderFraction: (currentClass: string, totalClass: string) => {
      return `<span class=${currentClass}></span>|
              <span class=${totalClass}></span>`;
    }
  };

  useEffect(() => {
    if (swiper) {
      swiper.rtlTranslate = dir === RIGHT_TO_LEFT;
    }
    dir === RIGHT_TO_LEFT
      ? setSliderPosition('visiting__slider_left')
      : setSliderPosition('visiting__slider_right');
  }, [swiper, dir]);

  return (
    <Visiting
      welcomeText={t2('welcome')}
      descriptionText={t2('from_the_castle')}
      btnText={t2('discover_btn')}
      code={code}
      sliderPosition={sliderPosition}
      dataForSlider={galleryPictures}
      swiper={swiper}
      manageSwiperState={setSwiper}
      sliderOptions={paginationOptions}
    />
  );
};

export default VisitingContainer;

VisitingContainer.displayName = 'VisitingContainer';

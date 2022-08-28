import { FC, ReactElement, RefObject, useEffect, useState } from 'react';

import { Navbar } from 'src/components/common';
import { PicturesGallery } from './picturesGallery';
import { BottomNavbar } from './bottomNavbar';

import { picturesType } from './picturesGallery/types';
import { ClassesTypes } from './types';
import { getTranslateDistance } from './helpers';
import { LAPTOP_SIZE } from 'src/constants';

type AdaptiveNavbarPropsTypes = {
  classesForAdaptiveNavbar: string;
  classesForNavbar: ClassesTypes;
  adaptiveNavbarRef: RefObject<HTMLDivElement>;
  pictures: picturesType[];
  dir: string;
  isOpen: boolean;
  closeAdaptiveNavbar: (e: any) => void;
};

export const AdaptiveNavbar: FC<AdaptiveNavbarPropsTypes> = ({
  classesForAdaptiveNavbar,
  classesForNavbar,
  adaptiveNavbarRef,
  pictures,
  dir,
  isOpen,
  closeAdaptiveNavbar
}): ReactElement => {
  const [translateDir, setTranslateDir] = useState('none');

  const windowResizeHandler = () => {
    if (window.innerWidth > LAPTOP_SIZE) {
      setTranslateDir('none');
      return;
    }
    !isOpen
      ? setTranslateDir(getTranslateDistance(dir, window.innerWidth))
      : setTranslateDir('none');
  };

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);
    if (window.innerWidth > LAPTOP_SIZE) {
      setTranslateDir('none');
      return;
    }

    !isOpen
      ? setTranslateDir(getTranslateDistance(dir, window.innerWidth))
      : setTranslateDir('none');
  }, []);

  useEffect(() => {
    if (window.innerWidth > LAPTOP_SIZE) {
      setTranslateDir('none');
      return;
    }
    !isOpen
      ? setTranslateDir(getTranslateDistance(dir, window.innerWidth))
      : setTranslateDir('none');
  }, [isOpen, dir]);

  return (
    <div
      ref={adaptiveNavbarRef}
      className={classesForAdaptiveNavbar}
      data-testid='nav-links-container'
      style={{ transform: translateDir }}
    >
      <Navbar
        classes={classesForNavbar}
        closeAdaptiveNavbar={closeAdaptiveNavbar}
      />
      <PicturesGallery pictures={pictures} />
      <BottomNavbar />
    </div>
  );
};

import { FC, ReactElement, RefObject, useEffect, useState } from 'react';

import { Navbar } from 'src/components/common';
import { PicturesGallery } from './picturesGallery';
import { BottomNavbar } from './bottomNavbar';

import { picturesType } from './picturesGallery/types';
import { ClassesTypes } from './types';
import { getTranslateDistance } from './helpers';

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
    isOpen && setTranslateDir(getTranslateDistance(dir, window.innerWidth));
  };

  useEffect(() => {
    setTranslateDir(getTranslateDistance(dir, window.innerWidth));
    window.addEventListener('resize', windowResizeHandler);
  }, []);

  useEffect(() => {
    setTranslateDir(getTranslateDistance(dir, window.innerWidth));
  }, [isOpen, dir]);

  return (
    <div
      ref={adaptiveNavbarRef}
      className={classesForAdaptiveNavbar}
      data-testid='nav-links-container'
      style={{
        transform: !isOpen ? translateDir : 'none'
      }}
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

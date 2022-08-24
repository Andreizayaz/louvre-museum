import { FC, ReactElement, RefObject } from 'react';

import { Navbar } from 'src/components/common';
import { PicturesGallery } from './picturesGallery';
import { BottomNavbar } from './bottomNavbar';

import { picturesType } from './picturesGallery/types';
import { ClassesTypes } from './types';

type AdaptiveNavbarPropsTypes = {
  classesForAdaptiveNavbar: string;
  classesForNavbar: ClassesTypes;
  adaptiveNavbarRef: RefObject<HTMLDivElement>;
  pictures: picturesType[];
  closeAdaptiveNavbar: (e: any) => void;
};

export const AdaptiveNavbar: FC<AdaptiveNavbarPropsTypes> = ({
  classesForAdaptiveNavbar,
  classesForNavbar,
  adaptiveNavbarRef,
  pictures,
  closeAdaptiveNavbar
}): ReactElement => {
  return (
    <div
      ref={adaptiveNavbarRef}
      className={classesForAdaptiveNavbar}
      data-testid='nav-links-container'
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

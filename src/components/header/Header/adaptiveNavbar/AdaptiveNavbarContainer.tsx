import { FC, ReactElement, useEffect, useRef } from 'react';

import { AdaptiveNavbar } from './AdaptiveNavbar';

import { galleryData } from './galleryData';

import './AdaptiveNavbar.scss';

type AdaptiveNavbarContainerPropsTypes = {
  isOpenMenu: boolean;
  closeAdaptiveNavbar: (e: any) => void;
};

const AdaptiveNavbarContainer: FC<AdaptiveNavbarContainerPropsTypes> = ({
  isOpenMenu,
  closeAdaptiveNavbar
}): ReactElement => {
  const adaptiveNavbarRef = useRef<HTMLDivElement>(null);

  const isNavbarClicked = (e: any) => {
    !e.target.contains(adaptiveNavbarRef.current as HTMLElement) &&
      closeAdaptiveNavbar(e);
  };

  useEffect(() => {
    document.addEventListener('click', isNavbarClicked);

    return () => {
      document.removeEventListener('click', isNavbarClicked);
    };
  }, [isOpenMenu]);

  const classesForAdaptiveNavbar = isOpenMenu
    ? 'adaptive-navbar adaptive-navbar_visible'
    : 'adaptive-navbar';
  const classesForNavbar = {
    navBarClasses: 'navbar',
    listOfLinksClasses: 'navbar__links-list links-list',
    listItemClasses: 'links-list__list-item list-item',
    linkClasses: 'list-item__link link'
  };
  return (
    <AdaptiveNavbar
      classesForAdaptiveNavbar={classesForAdaptiveNavbar}
      classesForNavbar={classesForNavbar}
      adaptiveNavbarRef={adaptiveNavbarRef}
      pictures={galleryData}
      closeAdaptiveNavbar={closeAdaptiveNavbar}
    />
  );
};

export default AdaptiveNavbarContainer;
AdaptiveNavbarContainer.displayName = 'AdaptiveNavbarContainer';

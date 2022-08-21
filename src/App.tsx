import { ReactElement, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrentLanguage } from 'src/store/Language';
import {
  selectIsVisitorVisible,
  setIsVisitorVisible
} from 'src/store/VisitorVisible';

import {
  Header,
  Main,
  Visiting,
  VirtualTour,
  PictureExplore,
  Video,
  Gallery,
  Tickets,
  Parallax,
  Contacts,
  Footer
} from 'src/components';
import { VisitorInfo } from 'src/components/sections/tickets/';
import { Modal, BackToTopButton } from 'src/components/common';

import './App.scss';
import { WINDOW_SCROLL_Y } from './constants';

const App = (): ReactElement => {
  const { dir, code } = useSelector(selectCurrentLanguage);
  const { t } = useTranslation('translation', { keyPrefix: 'titles' });

  const [isBackToTop, setIsBackToTop] = useState(false);

  const isVisibleVisitorInfo = useSelector(selectIsVisitorVisible);

  const dispatch = useDispatch();
  const closeVisitInfo = () => dispatch(setIsVisitorVisible(false));

  const scrollHandler = () => {
    window.scrollY >= WINDOW_SCROLL_Y
      ? setIsBackToTop(true)
      : setIsBackToTop(false);
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <>
      <Helmet>
        <html lang={code}></html>
        <title>{t('main_page_title')}</title>
        <body dir={dir}></body>
      </Helmet>
      <Header />
      <Main>
        <Visiting />
        <VirtualTour />
        <PictureExplore />
        <Video />
        <Gallery />
        <Tickets />
        <Parallax />
        <Contacts />
      </Main>
      <Footer />
      {isBackToTop && <BackToTopButton />}
      <Modal isVisible={isVisibleVisitorInfo} handleClick={closeVisitInfo}>
        <VisitorInfo />
      </Modal>
    </>
  );
};

export default App;

import { ReactElement } from 'react';
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
  Contacts
} from 'src/components';
import { VisitorInfo } from 'src/components/sections/tickets/';
import { Modal } from 'src/components/common';

import './App.scss';

const App = (): ReactElement => {
  const { dir, code } = useSelector(selectCurrentLanguage);
  const { t } = useTranslation('translation', { keyPrefix: 'titles' });

  const isVisibleVisitorInfo = useSelector(selectIsVisitorVisible);

  const dispatch = useDispatch();
  const closeVisitInfo = () => dispatch(setIsVisitorVisible(false));

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
      <Modal isVisible={isVisibleVisitorInfo} handleClick={closeVisitInfo}>
        <VisitorInfo />
      </Modal>
    </>
  );
};

export default App;

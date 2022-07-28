import { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  Header,
  Main,
  Visiting,
  VirtualTour,
  PictureExplore,
  Video,
  Gallery
} from './components';

import { selectCurrentLanguage } from './store/Language';

import './App.scss';

const App = (): ReactElement => {
  const { dir, code } = useSelector(selectCurrentLanguage);
  const { t } = useTranslation('translation', { keyPrefix: 'titles' });

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
      </Main>
    </>
  );
};

export default App;

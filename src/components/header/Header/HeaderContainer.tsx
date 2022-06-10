import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import Header from './Header';

const HeaderContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'links' });
  return (
    <>
      <Helmet>
        <title>{t('visiting')}</title>
      </Helmet>
      <Header />
    </>
  );
};

export default HeaderContainer;

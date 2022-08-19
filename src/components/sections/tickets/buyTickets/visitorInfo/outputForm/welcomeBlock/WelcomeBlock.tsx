import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import './WelcomeBlock.scss';

export const WelcomeBlock: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'welcome_section'
  });
  return (
    <div className='welcome-block'>
      <h2 className='welcome-block__heading'>{t('welcome')}</h2>
      <h3 className='welcome-block__subheading'>{t('discover_btn')}</h3>
    </div>
  );
};

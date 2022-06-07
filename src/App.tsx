import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import './App.scss';
import i18n from './i18next';

const App: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'heading' });

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div>{t('welcome_to_react')}</div>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('fr')}>Fr</button>
    </div>
  );
};

export default App;

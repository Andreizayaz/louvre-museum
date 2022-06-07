import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEn from './locales/en/translation.json';
import translationFr from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEn
  },
  fr: {
    translation: translationFr
  }
};

const setI18nextConfig = async () => {
  await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      supportedLngs: ['en', 'fr'],
      fallbackLng: 'en',
      detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie']
      },
      react: {
        useSuspense: false
      }
    });
};

void setI18nextConfig();

export default i18n;

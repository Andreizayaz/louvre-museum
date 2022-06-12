import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationAr from './locales/ar/ar_translation.json';
import translationCn from './locales/cn/cn_translation.json';
import translationDe from './locales/de/de_translation.json';
import translationEn from './locales/en/en_translation.json';
import translationEs from './locales/es/es_translation.json';
import translationFr from './locales/fr/fr_translation.json';
import translationIt from './locales/it/it_translation.json';
import translationPt from './locales/pt/pt_translation.json';
import translationRu from './locales/ru/ru_translation.json';

const resources = {
  ar: {
    translation: translationAr
  },
  cn: {
    translation: translationCn
  },
  de: {
    translation: translationDe
  },
  en: {
    translation: translationEn
  },
  es: {
    translation: translationEs
  },
  fr: {
    translation: translationFr
  },
  it: {
    translation: translationIt
  },
  pt: {
    translation: translationPt
  },
  ru: {
    translation: translationRu
  }
};

const setI18nextConfig = async () => {
  await i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      resources,
      supportedLngs: ['ar', 'cn', 'de', 'en', 'es', 'fr', 'it', 'pt', 'ru'],
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['localStorage']
      },
      react: {
        useSuspense: false
      }
    });
};

void setI18nextConfig();

export default i18n;

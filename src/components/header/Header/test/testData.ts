import { t } from 'i18next';

import { links as ar_links } from 'src/i18next/locales/ar/ar_translation.json';
import { links as cn_links } from 'src/i18next/locales/cn/cn_translation.json';
import { links as de_links } from 'src/i18next/locales/de/de_translation.json';
import { links as en_links } from 'src/i18next/locales/en/en_translation.json';
import { links as es_links } from 'src/i18next/locales/es/es_translation.json';
import { links as fr_links } from 'src/i18next/locales/fr/fr_translation.json';
import { links as it_links } from 'src/i18next/locales/it/it_translation.json';
import { links as pt_links } from 'src/i18next/locales/pt/pt_translation.json';
import { links as ru_links } from 'src/i18next/locales/ru/ru_translation.json';

export const arrayOfLinks: string[] = [
  t('links.visiting'),
  t('links.explore'),
  t('links.video'),
  t('links.gallery'),
  t('links.tickets'),
  t('links.contacts')
];

export const supportedLangs: string[] = [
  'ar',
  'cn',
  'de',
  'en',
  'es',
  'fr',
  'it',
  'pt',
  'ru'
];

export const countriesCodes: string[] = [
  'sa',
  'cn',
  'de',
  'gb',
  'es',
  'fr',
  'it',
  'pt',
  'ru'
];

export const langObject = {
  ar: ar_links,
  cn: cn_links,
  de: de_links,
  en: en_links,
  es: es_links,
  fr: fr_links,
  it: it_links,
  pt: pt_links,
  ru: ru_links
};

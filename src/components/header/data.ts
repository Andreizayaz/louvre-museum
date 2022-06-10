type language = {
  code: string;
  name: string;
  dir?: string;
  country_code: string;
};

export const languages: language[] = [
  {
    code: 'ar',
    name: 'عربي',
    dir: 'rlt',
    country_code: 'sa'
  },
  {
    code: 'cn',
    name: '中國人',
    country_code: 'cn'
  },
  {
    code: 'de',
    name: 'Deutsch',
    country_code: 'de'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'it',
    name: 'Italiano',
    country_code: 'it'
  },
  {
    code: 'pt',
    name: 'Portuguesa',
    country_code: 'pt'
  },
  {
    code: 'ru',
    name: 'Русский',
    country_code: 'ru'
  }
];

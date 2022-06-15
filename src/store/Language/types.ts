export type CurrentLanguageType = {
  code: string;
  name: string;
  dir: string;
  country_code: string;
};

export type LanguageAction = {
  payload: CurrentLanguageType;
};

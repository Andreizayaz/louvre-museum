export type inputGroupDataType = {
  iconClasses: string;
  name: string;
  placeholder: string;
};

export type dateAndTimeType = {
  type: string;
  placeholder: string;
};

export type dataForSelectType = {
  placeholder: string;
  options: optionsType[];
};

type optionsType = {
  value: string;
  label: string;
};

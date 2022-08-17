import { VisitDateRepresentationType } from './types';

const transformToCapitalString = (str: string): string =>
  str
    ? str.slice(0, 1).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase()
    : '';

export const getVisitDateRepresentation = (
  date: string,
  weekDays: string[],
  months: string[]
): VisitDateRepresentationType => {
  const currentDateVisit = new Date(date);

  return {
    weekDay: transformToCapitalString(weekDays[currentDateVisit.getDay()]),
    month: transformToCapitalString(months[currentDateVisit.getMonth()]),
    date: currentDateVisit.getDate()
  };
};

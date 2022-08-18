import parsePhoneNumberFromString, {
  isValidPhoneNumber
} from 'libphonenumber-js';

import { NAME, MAIL, PHONE, EMAIL_MATCH, NAME_MATCH } from 'src/constants';

import { errorObjectType } from './types';

const getZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);

export const getVisitDate = (date: Date): string => date.toString();

export const getVisitTime = (date: Date): string =>
  `${getZero(date.getHours())} : ${getZero(date.getMinutes())}`;

export const validateInput = (name: string, value: string): errorObjectType => {
  if (!value.trim().length) {
    return {
      isError: true,
      errorText: `Field '${name}' can't be empty`
    };
  }

  if (name === NAME) {
    if (!value.match(NAME_MATCH)) {
      return {
        isError: true,
        errorText: `Field '${name}' can't contain numbers`
      };
    }
  }

  if (name === MAIL) {
    if (!value.match(EMAIL_MATCH)) {
      return {
        isError: true,
        errorText: `Field '${name}' doesn't match email format`
      };
    }
  }

  if (name === PHONE) {
    if (!isValidPhoneNumber(value)) {
      return {
        isError: true,
        errorText: `Field '${name}' doesn't match phone number format`
      };
    }
  }

  return {
    isError: false,
    errorText: ''
  };
};

export const normalizePhoneNumber = (value: string): string => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

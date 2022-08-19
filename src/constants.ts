/* Change language */

export const LOCALE_STORAGE_KEY = 'i18nextLng';
export const DEFAULT_LANG = 'en';
export const GLOBE_ICON_HEIGHT = 30;
export const GLOBE_ICON_WIDTH = 30;

/* Louvre Links */
export const DISCOVER_LOUVRE_LINK =
  'https://www.google.com/maps/@48.8618159,2.3366818,3a,75y,81.55h,73.4t/data=!3m7!1e1!3m5!1sAF1QipOVxZQuSy3Bx9T_HpH_7FtBHDTXvI6SF-A10ocT!2e10!3e12!7i5472!8i2736';
export const SLIDER_GRADIENT =
  'linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0.5) 16.19%, rgba(0, 0, 0, 0) 30.73%)';
export const RIGHT_TO_LEFT = 'rtl';

/* Keyboard keys */
export const WHITE_SPACE = ' ';
export const LOWERCASE_LETTER_M = 'm';
export const UPPERCASE_LETTER_M = 'M';
export const LOWERCASE_LETTER_F = 'f';
export const UPPERCASE_LETTER_F = 'F';
export const SHIFT__KEY = 'Shift';
export const COMMA = ',';
export const DOT = '.';
export const ESCAPE_KEY = 'Escape';
export const ENTER_KEY = 'Enter';

/* Playback rates */
export const MAX_PLAYBACK_RATE = 2;
export const MIN_PLAYBACK_RATE = 0.25;
export const INCREASE_DECREASE_RATE_STEP = 0.25;

/* Ticket cost */
// Ticket types
export const PERMANENT_EXHIBITION = 'Permanent exhibition';
export const TEMPORARY_EXHIBITION = 'Temporary exhibition';
export const COMBINED_ADMISSION = 'Combined Admission';

export const TICKET_TYPE = 'ticketType';

export const BASIC_TICKET_TYPE = 'basic';
export const SENIOR_TICKET_TYPE = 'senior';

// Actions types
export const BASIC_PLUS = 'basic-plus';
export const BASIC_MINUS = 'basic-minus';
export const SENIOR_PLUS = 'senior-plus';
export const SENIOR_MINUS = 'senior-minus';

// Ticket constants
export const PERMANENT_BASIC = 20;
export const TEMPORARY_BASIC = 25;
export const COMBINED_BASIC = 40;

export const PERMANENT_SENIOR = 10;
export const TEMPORARY_SENIOR = 12.5;
export const COMBINED_SENIOR = 20;

export const MAX_TICKETS_COUNT = 15;

// Ticket cost form fields names
export const TICKET_TYPE_RADIO_NAME = 'ticketType';
export const DATE_TYPE = 'date';
export const TIME_TYPE = 'time';

/* Colors */
export const ACTIVE_BORDER_COLOR = '#9d8665';
export const COMMON_BORDER_COLOR = '#030303';
export const REB_BORDER_COLOR = '#710707';

/* Form input names */
export const DATE_VISIT = 'dateVisit';
export const TIME_VISIT = 'timeVisit';
export const NAME = 'name';
export const MAIL = 'mail';
export const PHONE = 'phone';

export const NAME_MATCH = /^([^0-9]*)$/;
export const EMAIL_MATCH = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
export const PHONE_MATCH =
  /^[+]?[(]?[0-9 ]{3}[)]?[-\s.]?[0-9 ]{3}[-\s.]?[0-9 ]{4,6}$/;

/* Contacts constants */

export const MUSEUM__ADDRESS =
  'https://www.google.by/maps/place/75001+%D0%9F%D0%B0%D1%80%D0%B8%D0%B6,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@48.8619643,2.3271879,15z/data=!3m1!4b1!4m5!3m4!1s0x47e66e25d0482b3d:0x1c0b82c6e1d85100!8m2!3d48.8640493!4d2.3310526?hl=ru';
export const MUSEUM_PHONE = '+33(0) 1 40 20 50 50';
export const MUSEUM_EMAIL = 'info@louvre.fr';

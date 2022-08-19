import {
  PERMANENT_EXHIBITION,
  TEMPORARY_EXHIBITION,
  COMBINED_ADMISSION
} from 'src/constants';

export const dataForInput = [
  {
    iconClasses: 'input-name-icon',
    name: 'name',
    placeholder: 'name'
  },
  {
    iconClasses: 'input-mail-icon',
    name: 'mail',
    placeholder: 'mail'
  },
  {
    iconClasses: 'input-phone-icon',
    name: 'phone',
    placeholder: 'phone'
  }
];

export const dataForDateAndTime = [
  { type: 'date', placeholder: 'date' },
  { type: 'time', placeholder: 'time' }
];

export const dataForSelectField = {
  placeholder: 'ticket_type',
  options: [
    {
      value: PERMANENT_EXHIBITION,
      label: 'permanent_exhibition'
    },
    {
      value: TEMPORARY_EXHIBITION,
      label: 'temporary_exhibition'
    },
    {
      value: COMBINED_ADMISSION,
      label: 'combined_admission'
    }
  ]
};

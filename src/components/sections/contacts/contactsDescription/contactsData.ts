import { t } from 'i18next';

import 'src/i18next';
import { MUSEUM__ADDRESS, MUSEUM_PHONE, MUSEUM_EMAIL } from 'src/constants';

export const contactsData = [
  {
    contactAddressText: `${t('contacts.address')}: `,
    contactAddressLink: MUSEUM__ADDRESS,
    contactAddressLinkText: t('contacts.address_name')
  },
  {
    contactAddressText: `${t('contacts.phone')}: `,
    contactAddressLink: `tel:${MUSEUM_PHONE}`,
    contactAddressLinkText: t('contacts.phone_number')
  },
  {
    contactAddressText: `${t('contacts.mail')}: `,
    contactAddressLink: `mailto:${MUSEUM_EMAIL}`,
    contactAddressLinkText: t('contacts.mail_address')
  }
];

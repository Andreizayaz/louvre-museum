import { MUSEUM__ADDRESS, MUSEUM_PHONE, MUSEUM_EMAIL } from 'src/constants';

export const contactsData = [
  {
    translationKeyAddress: 'address',
    contactAddressLink: MUSEUM__ADDRESS,
    translationKeyAddressLink: 'address_name'
  },
  {
    translationKeyAddress: 'phone',
    contactAddressLink: `tel:${MUSEUM_PHONE}`,
    translationKeyAddressLink: 'phone_number'
  },
  {
    translationKeyAddress: 'mail',
    contactAddressLink: `mailto:${MUSEUM_EMAIL}`,
    translationKeyAddressLink: 'mail_address'
  }
];

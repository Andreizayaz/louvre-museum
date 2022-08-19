import { FC, ReactElement } from 'react';

type ContactAddressPropsTypes = {
  contactAddressText: string;
  contactAddressLink: string;
  contactAddressLinkText: string;
};

export const ContactAddress: FC<ContactAddressPropsTypes> = ({
  contactAddressText,
  contactAddressLink,
  contactAddressLinkText
}): ReactElement => (
  <div className='contact-address'>
    <p className='contact-address__text'>{contactAddressText}</p>
    <a href={contactAddressLink} className='contact-address__link'>
      {contactAddressLinkText}
    </a>
  </div>
);

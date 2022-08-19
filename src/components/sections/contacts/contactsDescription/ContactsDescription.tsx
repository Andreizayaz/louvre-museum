import { FC, ReactElement } from 'react';

import { ContactAddress } from './contactAddress';

import { contactsData } from './contactsData';

type ContactsDescriptionPropsTypes = {
  descriptionHeading: string;
};

export const ContactsDescription: FC<ContactsDescriptionPropsTypes> = ({
  descriptionHeading
}): ReactElement => (
  <div className='contacts-description'>
    <h3 className='contacts-description__heading'>{descriptionHeading}</h3>
    <div className='contacts-description__addresses'>
      {contactsData.map(
        ({
          contactAddressText,
          contactAddressLink,
          contactAddressLinkText
        }) => (
          <ContactAddress
            key={contactAddressText}
            contactAddressText={contactAddressText}
            contactAddressLink={contactAddressLink}
            contactAddressLinkText={contactAddressLinkText}
          />
        )
      )}
    </div>
  </div>
);

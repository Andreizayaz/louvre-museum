import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ContactsDescription } from './ContactsDescription';

import { contactsData } from './contactsData';

import './ContactsDescription.scss';

const ContactsDescriptionContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  return (
    <ContactsDescription
      descriptionHeading={t('museum_name')}
      contactsData={contactsData.map(
        ({
          translationKeyAddress,
          contactAddressLink,
          translationKeyAddressLink
        }) => {
          return {
            contactAddressText: t(`${translationKeyAddress}`),
            contactAddressLink: contactAddressLink,
            contactAddressLinkText: t(`${translationKeyAddressLink}`)
          };
        }
      )}
    />
  );
};

export default ContactsDescriptionContainer;
ContactsDescriptionContainer.displayName = 'ContactsDescriptionContainer';

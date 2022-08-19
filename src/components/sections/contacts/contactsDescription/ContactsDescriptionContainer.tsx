import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { ContactsDescription } from './ContactsDescription';

import './ContactsDescription.scss';

const ContactsDescriptionContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  return <ContactsDescription descriptionHeading={t('museum_name')} />;
};

export default ContactsDescriptionContainer;
ContactsDescriptionContainer.displayName = 'ContactsDescriptionContainer';

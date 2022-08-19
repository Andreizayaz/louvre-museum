import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Contacts } from './Contacts';

import './Contacts.scss';

const ContactsContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' });

  return <Contacts heading={t('section_heading')} />;
};

export default ContactsContainer;
ContactsContainer.displayName = 'ContactsContainer';

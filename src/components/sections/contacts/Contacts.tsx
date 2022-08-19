import { FC, ReactElement } from 'react';

import { ContactsDescription } from './contactsDescription';
import { ContactMap } from './contactMap';

type ContactsPropsTypes = {
  heading: string;
};

export const Contacts: FC<ContactsPropsTypes> = ({ heading }): ReactElement => (
  <section id='contacts' className='contacts-section'>
    <div className='contacts-section__container container'>
      <div className='contacts-section__contacts-content'>
        <h2 className='contacts-content__heading'>{heading}</h2>
        <div className='contacts-content-description-and-map'>
          <ContactsDescription />
          <ContactMap />
        </div>
      </div>
    </div>
  </section>
);

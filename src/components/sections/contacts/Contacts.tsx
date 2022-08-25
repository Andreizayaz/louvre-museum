import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { ContactsDescription } from './contactsDescription';
import { ContactMap } from './contactMap';

type ContactsPropsTypes = {
  heading: string;
};

export const Contacts: FC<ContactsPropsTypes> = ({ heading }): ReactElement => {
  const { ref: contactsRef, inView: contactsIsVisible } = useInView({
    threshold: 0.1
  });

  return (
    <section
      ref={contactsRef}
      id='contacts'
      className='contacts-section'
      style={{ display: 'none' }}
    >
      <div className='contacts-section__container container'>
        <div
          className={
            contactsIsVisible
              ? 'contacts-content_visible contacts-content'
              : 'contacts-content'
          }
        >
          <h2 className='contacts-content__heading'>{heading}</h2>
          <div className='contacts-content-description-and-map'>
            <ContactsDescription />
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};

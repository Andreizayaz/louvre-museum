import { FC, ReactElement } from 'react';

import { TicketsSlider } from './ticketsSlider';
import { BuyTicketsForm } from './buyTickets';

import { picturesType } from './types';

type TicketsPropsTypes = {
  heading: string;
  pictures: picturesType[];
};

export const Tickets: FC<TicketsPropsTypes> = ({
  heading,
  pictures
}): ReactElement => (
  <section id='tickets' className='tickets'>
    <div className='tickets__container container'>
      <div className='tickets__tickets-content tickets-content'>
        <h2 className='tickets-content__heading'>{heading}</h2>
        <div className='tickets-content__buy-ticket buy-ticket'>
          <TicketsSlider pictures={pictures} />
          <BuyTicketsForm />
        </div>
      </div>
    </div>
  </section>
);

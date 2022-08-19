import { Dispatch, FC, ReactElement, SetStateAction } from 'react';

import { Swiper as SwiperInstance } from 'swiper';

import { TicketsSlider } from './ticketsSlider';
import { BuyTicketsForm } from './buyTickets';

import { picturesType } from './types';

type TicketsPropsTypes = {
  heading: string;
  pictures: picturesType[];
  manageSwiperState: Dispatch<SetStateAction<SwiperInstance | null>>;
};

export const Tickets: FC<TicketsPropsTypes> = ({
  heading,
  pictures,
  manageSwiperState
}): ReactElement => (
  <section id='tickets' className='tickets'>
    <div className='tickets__container container'>
      <div className='tickets__tickets-content tickets-content'>
        <h2 className='tickets-content__heading'>{heading}</h2>
        <div className='tickets-content__buy-ticket buy-ticket'>
          <TicketsSlider
            pictures={pictures}
            manageSwiperState={manageSwiperState}
          />
          <BuyTicketsForm />
        </div>
      </div>
    </div>
  </section>
);

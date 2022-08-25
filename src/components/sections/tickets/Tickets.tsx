import { Dispatch, FC, ReactElement, SetStateAction } from 'react';
import { useInView } from 'react-intersection-observer';

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
}): ReactElement => {
  const { ref: ticketsRef, inView: ticketsIsVisible } = useInView({
    threshold: 0.1
  });
  return (
    <section
      ref={ticketsRef}
      id='tickets'
      className='tickets'
      style={{ display: 'none' }}
    >
      <div className='tickets__container container'>
        <div
          className={
            ticketsIsVisible
              ? 'tickets__tickets-content tickets-content tickets-content_visible'
              : 'tickets__tickets-content tickets-content'
          }
        >
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
};

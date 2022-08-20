import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTicket } from 'src/store/Tickets';

import { VisitDescription } from './VisitDescription';

import { getVisitDateRepresentation } from '../../helpers';

import { weekDays, months } from './data';

import { date_pic, time_pic, check_circle } from './icons';

import './VisitDescription.scss';
import { translateSelectedTicketType } from '../../../helpers';

const VisitDescriptionContainer: FC = (): ReactElement => {
  const [t1] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const [t2] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.week_days'
  });

  const [t3] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.months'
  });

  const weekDaysTranslate = weekDays.map(({ translationKey }) =>
    t2(`${translationKey}`)
  );

  const monthsTranslate = months.map(({ translationKey }) =>
    t3(`${translationKey}`)
  );

  const { dateVisit, timeVisit, ticketType } = useSelector(selectTicket);

  const { weekDay, month, date } = getVisitDateRepresentation(
    dateVisit,
    weekDaysTranslate,
    monthsTranslate
  );

  const timeData = [
    {
      icon: date_pic,
      description: `${weekDay}, ${month} ${date}`
    },
    {
      icon: time_pic,
      description: timeVisit
    },
    {
      icon: check_circle,
      description: translateSelectedTicketType(ticketType)
    }
  ];

  return (
    <VisitDescription
      heading={t1('overview')}
      subheading={t1('tour_to_louvre')}
      timeData={timeData}
    />
  );
};

export default VisitDescriptionContainer;
VisitDescriptionContainer.displayName = 'VisitDescriptionContainer';

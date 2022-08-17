import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectTicket } from 'src/store/Tickets';

import { VisitDescription } from './VisitDescription';

import { getVisitDateRepresentation } from '../../helpers';

import { weekDays, months } from './data';

import { date_pic, time_pic, check_circle } from './icons';

import './VisitDescription.scss';

const VisitDescriptionContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });

  const { dateVisit, timeVisit, ticketType } = useSelector(selectTicket);

  const { weekDay, month, date } = getVisitDateRepresentation(
    dateVisit,
    weekDays,
    months
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
      description: ticketType
    }
  ];

  return (
    <VisitDescription
      heading={t('overview')}
      subheading={t('tour_to_louvre')}
      timeData={timeData}
    />
  );
};

export default VisitDescriptionContainer;
VisitDescriptionContainer.displayName = 'VisitDescriptionContainer';

import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { VisitImage } from './VisitImage';

import { louvreImg } from './img';

import './VisitImage.scss';

const VisitImageContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'buy_tickets.booking_tickets'
  });
  return <VisitImage imgSrc={louvreImg} title={t('tour_to_louvre')} />;
};

export default VisitImageContainer;
VisitImageContainer.displayName = 'VisitImageContainer';

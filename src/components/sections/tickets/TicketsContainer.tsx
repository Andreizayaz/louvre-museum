import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { picturesData } from './data';

import { Tickets } from './Tickets';

const TicketsContainer: FC = (): ReactElement => {
  const [t1] = useTranslation('translation', { keyPrefix: 'buy_tickets' });
  const [t2] = useTranslation('translation', {
    keyPrefix: 'buy_tickets.pictures'
  });

  return (
    <Tickets
      heading={t1('section_heading')}
      pictures={picturesData.map(({ translationKey, imgSrc }) => {
        return { title: t2(`${translationKey}`), imgSrc };
      })}
    />
  );
};

export default TicketsContainer;
TicketsContainer.displayName = 'TicketsContainer';

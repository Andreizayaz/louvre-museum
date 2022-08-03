import { FC, ReactElement } from 'react';

import { TicketBtnLabel } from './TicketBtnLabel';

const TicketBtnLabelContainer: FC = (): ReactElement => {
  const ticketCounter = 0;
  return <TicketBtnLabel ticketCounter={ticketCounter} />;
};

export default TicketBtnLabelContainer;
TicketBtnLabelContainer.displayName = 'TicketBtnLabelContainer';

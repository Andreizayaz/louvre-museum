import { FC, ReactElement } from 'react';

import { TicketCounter } from './TicketCounter';

type TicketCounterContainerPropsTypes = {
  counterHeading: string;
};

const TicketCounterContainer: FC<TicketCounterContainerPropsTypes> = ({
  counterHeading
}): ReactElement => {
  return <TicketCounter counterHeading={counterHeading} />;
};

export default TicketCounterContainer;
TicketCounterContainer.displayName = 'TicketCounterContainer';

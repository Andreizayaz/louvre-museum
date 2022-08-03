import { FC, ReactElement } from 'react';

import { BuyTicketsForm } from './BuyTicketsForm';

import './BuyTicketsForm.scss';

const BuyTicketsFormContainer: FC = (): ReactElement => <BuyTicketsForm />;

export default BuyTicketsFormContainer;
BuyTicketsFormContainer.displayName = 'BuyTicketsFormContainer';

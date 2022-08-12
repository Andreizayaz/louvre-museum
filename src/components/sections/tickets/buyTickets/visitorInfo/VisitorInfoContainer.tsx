import { FC, ReactElement } from 'react';

import { VisitorInfo } from './VisitorInfo';

import './VisitorInfo.scss';

const VisitorInfoContainer: FC = (): ReactElement => {
  return <VisitorInfo />;
};

export default VisitorInfoContainer;
VisitorInfoContainer.displayName = 'VisitorInfoContainer';

import { FC, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { setIsVisitorVisible } from 'src/store/VisitorVisible';

import { VisitorInfo } from './VisitorInfo';

import './VisitorInfo.scss';

const VisitorInfoContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const closeTicketForm = () => dispatch(setIsVisitorVisible(false));

  return <VisitorInfo handleClick={closeTicketForm} />;
};

export default VisitorInfoContainer;
VisitorInfoContainer.displayName = 'VisitorInfoContainer';

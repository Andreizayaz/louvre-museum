import { FC, ReactElement } from 'react';

import { SocialIcons } from './SocialIcons';

import './SocialIcons.scss';

const SocialIconsContainer: FC = (): ReactElement => {
  return <SocialIcons />;
};

export default SocialIconsContainer;
SocialIconsContainer.displayName = 'SocialIconsContainer';

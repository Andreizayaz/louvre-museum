import { FC, ReactElement } from 'react';

import { SocialIcon } from './socialIcon';

import { socialNetworksData } from './socialNetworksData';

export const SocialIcons: FC = (): ReactElement => (
  <div className='social-icons'>
    {socialNetworksData.map(({ iconSrc, iconTitle, link }) => (
      <SocialIcon
        key={iconTitle}
        iconSrc={iconSrc}
        iconTitle={iconTitle}
        link={link}
      />
    ))}
  </div>
);

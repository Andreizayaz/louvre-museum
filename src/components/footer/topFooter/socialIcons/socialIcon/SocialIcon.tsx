import { FC, ReactElement } from 'react';

type SocialIconPropsTypes = {
  iconSrc: string;
  iconTitle: string;
  link: string;
};

export const SocialIcon: FC<SocialIconPropsTypes> = ({
  iconSrc,
  iconTitle,
  link
}): ReactElement => (
  <div className='social-icon'>
    <a
      href={link}
      className='social-icon__link'
      title={iconTitle}
      style={{ backgroundImage: `url(${iconSrc})` }}
    ></a>
  </div>
);

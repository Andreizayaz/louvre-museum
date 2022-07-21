import { FC, ReactElement } from 'react';

import './VideoDescription.scss';

type VideoDescriptionPropsTypes = {
  heading: string;
  text: string;
};

export const VideoDescription: FC<VideoDescriptionPropsTypes> = ({
  heading,
  text
}): ReactElement => (
  <div className='video-section__video-description video-description'>
    <h2 className='video-description__heading'>{heading}</h2>
    <p className='video-description__text'>{text}</p>
  </div>
);

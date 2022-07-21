import { FC, ReactElement } from 'react';

import { VideoDescription } from './VideoDescription';
import { VideoSlider } from './VideoSlider';

type VideoPropsTypes = {
  heading: string;
  text: string;
};

export const Video: FC<VideoPropsTypes> = ({ heading, text }): ReactElement => (
  <section className='video-section' id='video'>
    <div className='video-section__container container'>
      <VideoDescription heading={heading} text={text} />
      <VideoSlider />
    </div>
  </section>
);

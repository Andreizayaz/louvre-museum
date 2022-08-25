import { FC, ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

import { VideoDescription } from './VideoDescription';
import { VideoSlider } from './VideoSlider';

type VideoPropsTypes = {
  heading: string;
  text: string;
};

export const Video: FC<VideoPropsTypes> = ({ heading, text }): ReactElement => {
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <section
      ref={ref}
      className='video-section'
      id='video'
      style={{ display: 'none' }}
    >
      <div
        style={{
          opacity: `${inView ? '1' : '0'}`,
          transition: 'all 1s'
        }}
        className='video-section__container container'
      >
        <VideoDescription heading={heading} text={text} />
        <VideoSlider />
      </div>
    </section>
  );
};

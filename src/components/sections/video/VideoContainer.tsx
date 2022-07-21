import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Video } from './Video';

import './Video.scss';

const VideoContainer: FC = (): ReactElement => {
  const { t } = useTranslation('translation', { keyPrefix: 'video_journey' });
  return <Video heading={t('section_heading')} text={t('description_text')} />;
};

export default VideoContainer;
VideoContainer.displayName = 'VideoContainer';

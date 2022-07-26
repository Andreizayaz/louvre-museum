import {
  ChangeEvent,
  FC,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import ReactPlayer from 'react-player';

import {
  WHITE_SPACE
  /* LOWERCASE_LETTER_F,
  LOWERCASE_LETTER_M,
  UPPERCASE_LETTER_F,
  UPPERCASE_LETTER_M,
  COMMA,
  DOT */
} from 'src/constants';

import screenfull from 'screenfull';

import { VideoPlayer } from './VideoPlayer';

type VideoPlayerContainerPropsTypes = {
  srcVideo: string;
  posterVideo: string;
  height: string;
  width: string;
  videoRef: RefObject<HTMLDivElement>;
};

const VideoPlayerContainer: FC<VideoPlayerContainerPropsTypes> = ({
  srcVideo,
  posterVideo,
  height,
  width,
  videoRef
}): ReactElement => {
  const [videoState, setVideoState] = useState({
    playing: false,
    light: posterVideo,
    volume: 0,
    loadedSeconds: 1,
    playedSeconds: 0,
    played: 0,
    duration: 0,
    isFinished: false
  });

  const [mutedState, setMutedState] = useState({
    isMuted: false,
    volumeBeforeMute: 0
  });

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlayerClicked, setIsPlayerClicked] = useState(false);

  const [reactPlayerHeight, setReactPlayerHeight] = useState(height);

  const { playing } = videoState;

  const refPlayer = useRef<ReactPlayer>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setVideoState({
      ...videoState,
      playing: !videoState.playing
    });
    if (!isPlayerClicked) {
      setIsPlayerClicked(true);
    }
  };

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoState({
      ...videoState,
      volume: parseFloat(e.target.value)
    });
  };

  const handleProgress = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoState({ ...videoState, ...e });
  };

  const handleProgressTrack = (e: ChangeEvent<HTMLInputElement>) =>
    refPlayer?.current?.seekTo(Number(e.target.value));

  const handleStartOrResumeVideo = () => {
    if (videoState.playedSeconds && !videoState.isFinished) {
      refPlayer?.current?.seekTo(Number(videoState.playedSeconds));
    }

    setVideoState({ ...videoState, playing: true, isFinished: false });
  };

  const handleFullScreen = async () => {
    await screenfull.toggle(videoRef.current as Element);
    setIsFullScreen(!isFullScreen);
  };

  const handlePreview = () => {
    setVideoState({ ...videoState, playing: true });
    if (!isPlayerClicked) {
      setIsPlayerClicked(true);
    }
  };

  const handleVideoPlayFinish = () =>
    setVideoState({ ...videoState, playing: false, isFinished: true });

  const muteVolume = () => {
    const { volume } = videoState;
    const { isMuted } = mutedState;
    if (!isMuted) {
      volume && setMutedState({ volumeBeforeMute: volume, isMuted: true });
      setVideoState({
        ...videoState,
        volume: 0
      });
    } else {
      setMutedState({ ...mutedState, isMuted: false });
      setVideoState({
        ...videoState,
        volume: mutedState.volumeBeforeMute
      });
    }
  };

  useEffect(() => {
    setVideoState({
      ...videoState,
      light: !videoState.playing && !isPlayerClicked ? posterVideo : ''
    });
  }, [playing]);

  useEffect(() => {
    const isExistRef = videoRef.current && controlsRef.current;
    if (isFullScreen && isExistRef) {
      setReactPlayerHeight(
        `${
          videoRef.current?.offsetHeight - controlsRef.current?.offsetHeight
        }px`
      );
    } else {
      setReactPlayerHeight(height);
    }
  }, [isFullScreen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (!isPlayerClicked) {
      return;
    }

    const playedSecondsBeforeKeyDown = videoState.playedSeconds;
    console.log(playedSecondsBeforeKeyDown);

    switch (e.key) {
      case WHITE_SPACE:
        e.preventDefault();
        handlePlay();
        refPlayer.current?.seekTo(playedSecondsBeforeKeyDown);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyDown(e), {
      once: true
    });

    return document.removeEventListener('keydown', (e) => handleKeyDown(e));
  });

  const funcs = {
    handlePlay,
    handleVolume,
    muteVolume,
    handleProgressTrack,
    handleFullScreen
  };

  return (
    <VideoPlayer
      reactPlayerHeight={reactPlayerHeight}
      posterVideo={posterVideo}
      srcVideo={srcVideo}
      width={width}
      reactPlayerOptions={videoState}
      controlFuncs={funcs}
      controlOptions={videoState}
      refPlayer={refPlayer}
      handleProgress={handleProgress}
      handleStartOrResumeVideo={handleStartOrResumeVideo}
      handlePreview={handlePreview}
      handleVideoPlayStart={handleStartOrResumeVideo}
      handleVideoPlayFinish={handleVideoPlayFinish}
      loadedSeconds={videoState.loadedSeconds}
      playedSeconds={videoState.playedSeconds}
      played={videoState.played}
      controlsRef={controlsRef}
      isFullScreen={isFullScreen}
      videoRef={videoRef}
      isPlayerClicked={isPlayerClicked}
    />
  );
};

export default VideoPlayerContainer;
VideoPlayerContainer.displayName = 'VideoPlayerContainer';

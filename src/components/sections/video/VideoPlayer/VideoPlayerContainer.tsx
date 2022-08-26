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
import { useDispatch, useSelector } from 'react-redux';

import screenfull from 'screenfull';

import { selectVideoParams } from 'src/store/VideoPlayer';
import { changePlaying, changeVolume } from 'src/store/VideoPlayer/reducer';

import {
  WHITE_SPACE,
  LOWERCASE_LETTER_F,
  LOWERCASE_LETTER_M,
  UPPERCASE_LETTER_F,
  UPPERCASE_LETTER_M,
  /*SHIFT__KEY,
  COMMA,
  DOT, 
  MAX_PLAYBACK_RATE,
  MIN_PLAYBACK_RATE,
  INCREASE_DECREASE_RATE_STEP,
  ENTER_KEY,  */
  ESCAPE_KEY
} from 'src/constants';

import { VideoPlayerContext } from './videoPlayerContext';

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
  const { playing, volume } = useSelector(selectVideoParams);
  const dispatch = useDispatch();

  const [videoState, setVideoState] = useState({
    light: posterVideo,
    loadedSeconds: 1,
    playedSeconds: 0,
    played: 0,
    duration: 0,
    playbackRate: 1,
    isFinished: false
  });

  const [mutedState, setMutedState] = useState({
    isMuted: false,
    volumeBeforeMute: 0
  });

  /* const [playbackRate, setPlayBackRate] = useState(1); */

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPlayerClicked, setIsPlayerClicked] = useState(false);
  const [reactPlayerHeight, setReactPlayerHeight] = useState(height);

  const { light } = videoState;
  const { loadedSeconds, playedSeconds, played } = videoState;

  const refPlayer = useRef<ReactPlayer>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    dispatch(changePlaying(!playing));
    if (!isPlayerClicked) {
      setIsPlayerClicked(true);
    }
  };

  /* const handleMaxPlayBackRate = () => {
    if (playbackRate === MAX_PLAYBACK_RATE) {
      return;
    }

    setPlayBackRate(playbackRate + INCREASE_DECREASE_RATE_STEP);
  };

  const handleMinPlayBackRate = () => {
    if (playbackRate === MIN_PLAYBACK_RATE) {
      return;
    }

    setPlayBackRate(playbackRate - INCREASE_DECREASE_RATE_STEP);
  }; */

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeVolume(parseFloat(e.target.value)));
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

    setVideoState({ ...videoState, isFinished: false });
    dispatch(changePlaying(true));
  };

  const handleFullScreen = async () => {
    await screenfull.toggle(videoRef.current as Element);
    setIsFullScreen(!isFullScreen);
  };

  const handlePreview = () => {
    dispatch(changePlaying(true));
    if (!isPlayerClicked) {
      setIsPlayerClicked(true);
    }
  };

  const handleVideoPlayFinish = () => {
    setVideoState({ ...videoState, isFinished: true });
    dispatch(changePlaying(false));
  };

  const muteVolume = () => {
    const { isMuted } = mutedState;
    if (!isMuted) {
      volume && setMutedState({ volumeBeforeMute: volume, isMuted: true });
      dispatch(changeVolume(0));
    } else {
      setMutedState({ ...mutedState, isMuted: false });
      dispatch(changeVolume(mutedState.volumeBeforeMute));
    }
  };

  const handleKeyDown = async (e: KeyboardEvent) => {
    e.preventDefault();
    if (!isPlayerClicked) {
      return;
    }

    /* if (e.key === SHIFT__KEY && e.repeat && e.key === COMMA) {
      console.log('comma');
      handleMaxPlayBackRate();
      return;
    }

    if (e.shiftKey && e.key === DOT) {
      console.log('dot');
      handleMinPlayBackRate();
      return;
    } */

    switch (e.key) {
      case WHITE_SPACE:
        //e.preventDefault();
        handlePlay();
        /* if (playing) {
          refPlayer.current?.seekTo(videoState.playedSeconds);
        } */
        break;

      case LOWERCASE_LETTER_M || UPPERCASE_LETTER_M:
        console.log('mute');
        muteVolume();
        break;
      case LOWERCASE_LETTER_F || UPPERCASE_LETTER_F:
        await handleFullScreen();
        break;
      case ESCAPE_KEY:
        if (isFullScreen) {
          await handleFullScreen();
        }
        break;
      default:
        break;
    }
  };

  //document.addEventListener('keydown', handleKeyDown, { once: true });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, { once: true });

    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  useEffect(() => {
    dispatch(changePlaying(false));
  }, []);

  useEffect(() => {
    setReactPlayerHeight(height);
  }, [height]);

  useEffect(() => {
    setVideoState({
      ...videoState,
      light: !playing && !isPlayerClicked ? posterVideo : ''
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

  const funcs = {
    handlePlay,
    handleVolume,
    muteVolume,
    handleProgressTrack,
    handleFullScreen,
    handlePreview,
    handleProgress,
    handleStartOrResumeVideo,
    handleVideoPlayFinish
  };

  const reactPlayerOptions = { playing, light, volume /* , playbackRate */ };
  const trackPlayerOptions = { loadedSeconds, playedSeconds, played };
  const controlsOptions = { isFullScreen, isPlayerClicked };

  console.log(reactPlayerHeight);

  return (
    <VideoPlayerContext.Provider
      value={{
        ...funcs,
        ...trackPlayerOptions,
        ...controlsOptions,
        reactPlayerOptions,
        controlsRef,
        srcVideo,
        posterVideo,
        reactPlayerHeight,
        refPlayer,
        width
      }}
    >
      <VideoPlayer />
    </VideoPlayerContext.Provider>
  );
};

export default VideoPlayerContainer;
VideoPlayerContainer.displayName = 'VideoPlayerContainer';

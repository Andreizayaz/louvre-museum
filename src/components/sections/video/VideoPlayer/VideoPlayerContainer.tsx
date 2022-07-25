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
    duration: 0
  });

  const [mutedState, setMutedState] = useState({
    isMuted: false,
    volumeBeforeMute: 0
  });

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [reactPlayerHeight, setReactPlayerHeight] = useState(height);

  const { playing } = videoState;

  const refPlayer = useRef<ReactPlayer>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setVideoState({
      ...videoState,
      playing: !videoState.playing
    });
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

  const handleStartVideo = () => {
    if (videoState.playedSeconds) {
      refPlayer?.current?.seekTo(Number(videoState.playedSeconds));
    }
  };

  const handleFullScreen = async () => {
    await screenfull.toggle(videoRef.current as Element);
    setIsFullScreen(!isFullScreen);
  };

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
      light: !videoState.playing ? posterVideo : ''
    });
  }, [playing]);

  useEffect(() => {
    const isExistRef = videoRef.current && controlsRef.current;
    if (isFullScreen && isExistRef) {
      setReactPlayerHeight(`${300 + 500}px`);
      console.log('From useEffect:', videoRef.current?.offsetHeight);
      console.log('From useEffect:', controlsRef.current?.offsetHeight);
    } else {
      setReactPlayerHeight(height);
    }
  }, [isFullScreen]);

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
      handleStartVideo={handleStartVideo}
      loadedSeconds={videoState.loadedSeconds}
      playedSeconds={videoState.playedSeconds}
      played={videoState.played}
      controlsRef={controlsRef}
      isFullScreen={isFullScreen}
      videoRef={videoRef}
    />
  );
};

export default VideoPlayerContainer;
VideoPlayerContainer.displayName = 'VideoPlayerContainer';

import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<string>("1");
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const currentMusic = useSelector(
    (state: RootState) => state.player.currentMusic
  );

  const skipBack = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime - 5;
      if (newTime < 0) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      } else {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + 5;
      if (newTime > audioRef.current.duration) {
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      } else {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const skipRandom = () => {
    if (audioRef.current) {
      const newTime = Math.floor(
        Math.random() * Math.floor(audioRef.current.duration)
      );
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const whilePlaying = useCallback(() => {
    if (progressRef.current && audioRef.current) {
      const { currentTime } = audioRef.current;
      progressRef.current.value = currentTime.toString();
      if (progressRef.current && audioRef.current) {
        const { currentTime } = audioRef.current;
        progressRef.current.value = currentTime.toString();
        setCurrentTime(currentTime);

        animationRef.current = requestAnimationFrame(whilePlaying);
      }
    }
  }, [audioRef, setCurrentTime, animationRef]);

  const formatDuration = (sec: number): string => {
    const minutes: number = Math.floor(sec / 60);
    const newMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(sec % 60);
    const newSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };
  const skipForward10 = () => {
    if (audioRef.current && audioRef.current.currentTime) {
      const newTime = audioRef.current.currentTime + 10;
      if (newTime > audioRef.current.duration) {
        isRandom ? skipRandom() : skipForward();
      } else {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const skipBack10 = () => {
    if (audioRef.current && audioRef.current.currentTime) {
      const newTime = audioRef.current.currentTime - 10;
      if (newTime < 0) {
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
      } else {
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  useEffect(() => {
    const updateAudioProperties = () => {
      if (audioRef.current) {
        audioRef.current.volume = +volume;
        audioRef.current.muted = isMuted;
      }
    };

    if (currentMusic?.id === "0" || !audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      const interval = setInterval(() => {
        if (audioRef.current && audioRef.current.duration) {
          const seconds = Math.floor(audioRef.current.duration);
          setDuration(seconds);
        }
      }, 1000);
      updateAudioProperties();
      return () => clearInterval(interval);
    }
    audioRef.current.pause();
    cancelAnimationFrame(animationRef.current);
    updateAudioProperties();
  }, [
    volume,
    whilePlaying,
    isPlaying,
    isMuted,
    currentMusic,
    audioRef,
    progressRef,
  ]);

  function handleRangeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = parseFloat(event.target.value);
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  }

  return (
    <Container fluid>
      <Row className="playerContainer">
        <Col>
          <div className="musicBanner">
            <Image src={currentMusic?.album_img} alt={currentMusic?.title} />
            <div className="musicBannerContent">
              <span>{currentMusic?.title}</span>
              <p>{currentMusic?.album}</p>
            </div>
          </div>
          <audio ref={audioRef} src={currentMusic?.audio} />
        </Col>
        <Col className="player">
          <div className="inputButtons">
            <div className="buttons">
              <button className="clockwise" onClick={skipBack10}>
                10sec
                <i className="bi bi-arrow-counterclockwise" />
              </button>
              <button onClick={skipBack} style={{ rotate: "180deg" }}>
                <i className="bi bi-fast-forward-fill" />
              </button>
              <button
                className="playPause"
                style={{ fontSize: "2.7rem" }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? (
                  <i className="bi bi-pause-fill" />
                ) : (
                  <i className=" bi-play-fill" />
                )}
              </button>
              <button onClick={skipForward}>
                <i className="bi bi-fast-forward-fill" />
              </button>
              <button className="clockwise" onClick={skipForward10}>
                <i className="bi bi-arrow-clockwise" />
                10sec
              </button>
            </div>
            <div className="progressBar">
              <span className="currentTime">{formatDuration(currentTime)}</span>
              <input
                type="range"
                className="currentProgress"
                defaultValue="0"
                ref={progressRef}
                onChange={handleRangeChange}
                min="0"
                max={duration}
                step="0.01"
              />
              <span className="duration">
                {duration && !isNaN(duration) && formatDuration(duration)}
              </span>
            </div>
          </div>
        </Col>
        <Col className="volumeC">
          <button
            onClick={() => setIsRandom(!isRandom)}
            className="randomMusicsButton"
          >
            {isRandom ? (
              <i className="bi bi-shuffle" style={{ color: "#ff0000" }} />
            ) : (
              <i className="bi bi-shuffle" />
            )}
          </button>
          <button
            className="volumeButton buttons"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? (
              <i className="bi bi-volume-mute" />
            ) : (
              <i className="bi bi-volume-up" />
            )}
          </button>
          <input
            type="range"
            step="0.01"
            onChange={(e) => setVolume(e.target.value)}
            value={volume}
            max="1"
            min="0"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default Player;

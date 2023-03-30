import { useEffect, useRef, useState, useCallback } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { MusicType } from "../types/music";

type Props = {
  musics: MusicType[];
  id: string;
  setId: (e: string) => void;
};

export const Player: React.FC<Props> = ({ musics, id, setId }: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<string>("1");
  const [duration, setDuration] = useState<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioTag = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>(0);

  const skipRandom = useCallback(() => {
    const idNum = parseInt(id);
    const randomNum = Math.floor(Math.random() * 9);
    if (randomNum === 0 || randomNum === idNum) {
      const newNum = randomNum + 1;
      setId(newNum.toString());
    } else {
      setId(randomNum.toString());
    }
  }, [id, setId]);

  const skipForward = useCallback(() => {
    if (id === "") {
      setId("1")
    } else if (isRandom) {
      skipRandom();
    } else if (id === "9") {
      setId("1");
    } else {
      const idNum = parseInt(id);
      const newId = idNum + 1;
      setId(newId.toString());
    }
  }, [id, isRandom, skipRandom, setId]);

  const whilePlaying = useCallback(() => {
    if (progressBar.current && audioTag.current) {
      const { currentTime, duration } = audioTag.current;
      progressBar.current.value = currentTime.toString();
      setCurrentTime(currentTime);

      animationRef.current = requestAnimationFrame(whilePlaying);

      if (currentTime >= duration) {
        isRandom ? skipRandom() : skipForward();
      }
    }
  }, [
    progressBar,
    audioTag,
    setCurrentTime,
    animationRef,
    isRandom,
    skipRandom,
    skipForward,
  ]);

  const calculateDuration = (sec: number): string => {
    const minutes: number = Math.floor(sec / 60);
    const newMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds: number = Math.floor(sec % 60);
    const newSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return `${newMinutes}:${newSeconds}`;
  };
  

  const skipBack = () => {
    if (id === undefined) {
      alert("Choose a song!");
    } else {
      const idNum = parseInt(id);
      const newId = idNum - 1;
      setId(newId.toString());
    }
  };

  const changeRange = () => {
    if (progressBar.current && audioTag.current) {
      audioTag.current.currentTime = parseFloat(progressBar.current.value);
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };
  const skipForward10 = () => {
    if (audioTag.current && audioTag.current.currentTime) {
      const newTime = audioTag.current.currentTime + 10;
      if (newTime > audioTag.current.duration) {
        isRandom ? skipRandom() : skipForward();
      } else {
        audioTag.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  const skipBack10 = () => {
    if (audioTag.current && audioTag.current.currentTime) {
      const newTime = audioTag.current.currentTime - 10;
      if (newTime < 0) {
        audioTag.current.currentTime = 0;
        setCurrentTime(0);
      } else {
        audioTag.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    }
  };

  useEffect(() => {
    const updateAudioProperties = () => {
      if (audioTag.current) {
        audioTag.current.volume = +volume;
        audioTag.current.muted = isMuted;
      }
    };

    if (id === "0" || !audioTag.current) {
      return;
    }

    if (isPlaying) {
      audioTag.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      const interval = setInterval(() => {
        if (audioTag.current && audioTag.current.duration) {
          const seconds = Math.floor(audioTag.current.duration);
          setDuration(seconds);
        }
      }, 1000);
      updateAudioProperties();
      return () => clearInterval(interval);
    }

    audioTag.current.pause();
    cancelAnimationFrame(animationRef.current);
    updateAudioProperties();
  }, [
    id,
    whilePlaying,
    isPlaying,
    isMuted,
    volume,
    musics,
    audioTag,
    progressBar,
  ]);
  return (
    <Container fluid>
      <Row className="playerContainer">
        {musics.map((music) =>
          id === music.id ? (
            <Col key={music.id}>
              <div className="musicBanner">
                <Image src={music.album_img} alt={music.name} />
                <div className="musicBannerContent">
                  <span>{music.name}</span>
                  <p>{music.author}</p>
                </div>
              </div>
              <audio src={music.audio} ref={audioTag} />
            </Col>
          ) : null
        )}
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
                style={{ fontSize: "2.5rem" }}
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
              <span className="PcurrentTime">
                {calculateDuration(currentTime)}
              </span>
              <input
                type="range"
                className="currentProgress"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />
              <span className="Pduration">
                {duration && !isNaN(duration) && calculateDuration(duration)}
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

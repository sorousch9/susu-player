import { useEffect, useRef, useState } from "react";
import { MusicType } from "../types/music";

type Props = {
  musics: MusicType[];
  id: string;
  isFull: boolean;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
  windowWidth: number;
};

export const Player = ({
  musics,
  id,
  setId,
  setIsFull,
  isFull,
  windowWidth,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [volume, setVolume] = useState<string>("1");
  const [duration, setDuration] = useState<number>(0);
  const [isRandom, setIsRandom] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioTag = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    if (id !== "0" && audioTag.current) {
      if (isPlaying) {
        audioTag.current.play();
        animationRef.current = requestAnimationFrame(whilePlaying);

        audioTag.current.volume = +volume;

        if (isMuted) {
          audioTag.current.muted = true;
        } else audioTag.current.muted = false;

        const interval = setInterval(() => {
          if (audioTag.current && audioTag.current.duration) {
            const seconds = Math.floor(audioTag.current.duration);
            setDuration(seconds);
          }
        }, 1000);

        setInterval(() => {
          if (duration > 0 || duration !== undefined) {
            clearInterval(interval);

            if (
              audioTag.current &&
              audioTag.current.currentTime === audioTag.current.duration
            ) {
              isRandom ? skipRandom() : skipForward();
            }
          }
        }, 1100);
      } else {
        audioTag.current.pause();
        audioTag.current.volume = +volume;
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [[], isRandom]);

  const calculateDuration = (sec: number) => {
    const minutes = Math.floor(sec / 60);
    const newMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const newSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${newMinutes}:${newSeconds}`;
  };
  const skipForward = () => {
    if (id === "") {
      alert("Choose a song!");
    } else if (isRandom) {
      skipRandom();
    } else if (id === "9") {
      setId("1");
    } else {
      const idNum = parseInt(id);
      const newId = idNum + 1;
      setId(newId.toString());
    }
  };
  const skipRandom = () => {
    const idNum = parseInt(id);
    const randomNum = Math.floor(Math.random() * 9);
    if (randomNum === 0 || randomNum === idNum) {
      const newNum = randomNum + 1;
      setId(newNum.toString());
    } else {
      setId(randomNum.toString());
    }
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

  const whilePlaying = () => {
    if (progressBar.current && audioTag.current) {
      const { currentTime, duration } = audioTag.current;
      progressBar.current.value = currentTime.toString();
      setCurrentTime(currentTime);
      if (windowWidth >= 830 || isFull) {
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
      if (currentTime >= duration) {
        isRandom ? skipRandom() : skipForward();
      }
    }
  };

  const changeRange = () => {
    if (progressBar.current && audioTag.current) {
      audioTag.current.currentTime = parseFloat(progressBar.current.value);
      setCurrentTime(parseFloat(progressBar.current.value));
    }
  };

  return (
    <div className="playerContainer">
      <div className="musicDiv">
        {musics.map((music) =>
          +id === music.id ? (
            <div
              onClick={() => setIsFull(windowWidth <= 820 && !isFull)}
              className="music"
              key={music.id}
            >
              {!isFull ? (
                <>
                  <img src={music.album_img} alt={music.name} />
                  <div>
                    <h1>{music.name}</h1>
                    <h3>{music.author}</h3>
                  </div>
                </>
              ) : (
                ""
              )}
              <audio src={music.audio} ref={audioTag} />
            </div>
          ) : (
            ""
          )
        )}
      </div>
      <div className="player">
        <div className="inputButtons">
          {isFull || windowWidth >= 830 ? (
            <div className="progressBar">
              <p className="PcurrentTime">{calculateDuration(currentTime)}</p>
              <input
                type="range"
                className="currentProgress"
                defaultValue="0"
                ref={progressBar}
                onChange={changeRange}
              />

              <p className="Pduration">
                {duration && !isNaN(duration) && calculateDuration(duration)}
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="buttons">
            {windowWidth >= 830 || isFull ? (
              <button
                onClick={() => setIsRandom(!isRandom)}
                className="randomMusicsButton"
              >
                {isRandom ? (
                  <i className="bi bi-shuffle" />
                ) : (
                  <i className="bi bi-shuffle" />
                )}
              </button>
            ) : (
              ""
            )}
            <button onClick={skipBack}>
              <i className="bi bi-skip-backward" />
            </button>
            <button
              className="playPause"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? (
                <i className="bi bi-pause" />
              ) : (
                <i className="bi bi-play" />
              )}
            </button>
            <button onClick={skipForward}>
              <i className="bi bi-skip-forward" />
            </button>
          </div>
        </div>
      </div>

      {windowWidth > 825 && (
        <div className="volumeC">
          <button className="volumeButton" onClick={() => setIsMuted(!isMuted)}>
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
        </div>
      )}
    </div>
  );
};

export default Player;

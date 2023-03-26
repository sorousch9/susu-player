import { useState, useRef } from "react";
import classes from "./musicbox.module.css";
import {
  Card,
  Col,
  Row,
  ProgressBar,
  Button,
  ButtonGroup,
} from "react-bootstrap";

const Musicbox = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

const togglePlayPause = () => {
  const audio = audioRef.current;
  if (audio) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }
};

  return (
    <Card>
      <Row>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title>Live From Space</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Mac Miller
            </Card.Subtitle>
            <div>
              <ButtonGroup>
                <Button className={classes.musicPlayerButton}>
                  <i className="bi bi-skip-backward" />
                </Button>

                <Button className={classes.musicPlayerButton}>
                  <i className="bi bi-arrow-counterclockwise" />
                </Button>

                <Button
                  className={classes.musicPlayerButton}
                  onClick={togglePlayPause}
                  active={isPlaying}
                >
                  {isPlaying ? (
                    <i className="bi bi-pause" />
                  ) : (
                    <i className="bi bi-play" />
                  )}
                </Button>

                <Button className={classes.musicPlayerButton}>
                  <i className="bi bi-arrow-clockwise" />
                </Button>

                <Button className={classes.musicPlayerButton}>
                  <i className="bi bi-skip-forward" />
                </Button>
              </ButtonGroup>
            </div>
            <div className="mt-2">
              <Col>
                <audio
                  ref={audioRef}
                  src="https://cdn.pixabay.com/download/audio/2022/03/25/audio_42b0dba7b5.mp3?filename=i-canx27t-fall-in-love-106865.mp3"
                  preload="metadata"
                />
                <ProgressBar variant="primary" now={60} />
              </Col>
            </div>
          </Card.Body>
        </Col>
        <Col xs={6} md={4}>
          <Card.Img
            src="https://cdn.pixabay.com/audio/2022/08/31/19-48-37-847_200x200.jpg"
            alt="Live from space album cover"
            style={{ width: "9rem" }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default Musicbox;

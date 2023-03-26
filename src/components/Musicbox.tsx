import { useState, useRef } from "react";
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
            <div className="musicPlayerButton">
              <ButtonGroup>
                <Button>
                  <i className="bi bi-skip-backward" />
                </Button>
                <Button>
                  <i className="bi bi-arrow-counterclockwise" />
                </Button>
                <Button
                  variant="outline-dark"
                  onClick={togglePlayPause}
                  active={isPlaying}
                >
                  {isPlaying ? (
                    <i className="bi bi-pause" />
                  ) : (
                    <i className="bi bi-play" />
                  )}
                </Button>
                <Button>
                  <i className="bi bi-arrow-clockwise" />
                </Button>
                <Button>
                  <i className="bi bi-skip-forward" />
                </Button>
              </ButtonGroup>
            </div>
            <div>
              <audio
                ref={audioRef}
                src="https://cdn.pixabay.com/download/audio/2022/03/25/audio_42b0dba7b5.mp3?filename=i-canx27t-fall-in-love-106865.mp3"
                preload="metadata"
              />
              <div className="currentTime">0:00</div>
              <input type="range" className="progressBar" />
              <div className="duration">2:49</div>
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

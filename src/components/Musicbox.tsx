import { useState } from "react";
import { Card, Col, Row, ProgressBar, Button } from "react-bootstrap";

const Musicbox = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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
            <Row className="align-items-center">
              <Col>
                <Button variant="outline-dark">
                  <i className="bi bi-skip-backward" />
                </Button>
              </Col>
              <Col>
                <Button variant="outline-dark">
                  <i className="bi bi-arrow-counterclockwise" />
                </Button>
              </Col>
              <Col>
                <Button variant="outline-dark" onClick={togglePlayPause}>
                  {isPlaying ? (
                    <i className="bi bi-pause" />
                  ) : (
                    <i className="bi bi-play" />
                  )}
                </Button>
              </Col>
              <Col>
                <Button variant="outline-dark">
                  <i className="bi bi-arrow-clockwise" />
                </Button>
              </Col>
              <Col>
                <Button variant="outline-dark">
                  <i className="bi bi-skip-forward" />
                </Button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <audio
                  src="https://cdn.pixabay.com/download/audio/2022/03/25/audio_42b0dba7b5.mp3?filename=i-canx27t-fall-in-love-106865.mp3"
                  preload="metadata"
                />
                <ProgressBar variant="primary" now={60} />
              </Col>
            </Row>
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

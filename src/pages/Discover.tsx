import { MusicType } from "../types/music";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { addMusic } from "../redux/playerReducer";
const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await axios.get<MusicType[]>(
        "http://localhost:3009/musics"
      );
      if (response !== undefined) {
        setMusics(response.data);
      }
    };
    fetchDataAsync();
  }, []);
  return (
    <Container>
      <Row className="discover">
        {musics.map((music) => (
          <Col xs={6} md={2} key={music.id}>
            <Card
              onClick={() => {
                addMusic(music);
              }}
              bg="transparent"
            >
              <Card.Img src={music.album_img} alt={music.title} />
              <Card.Title>{music.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {music.album}
              </Card.Subtitle>
              <audio src={music.audio} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Discover;

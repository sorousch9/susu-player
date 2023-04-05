import { MusicType } from "../types/music";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMusic } from "../redux/playerReducer";
import PlayList from "../components/Playlist";
import { SusuExclusive } from "../components/SusuExclusive";

const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataAsync = async () => {
      const url = "http://localhost:3009/musics";
      const params = {
        topMusics: true,
        HitsMusics: true,
      };
      const response = await axios.get<MusicType[]>(url, { params });
      if (response.data) {
        setMusics(response.data);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Row className="discover">
        <PlayList />
        <SusuExclusive />
        {musics.map((music) => (
          <Col xs={6} md={2} key={music.id}>
            <Card
              onClick={() => dispatch(addMusic({ music }))}
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

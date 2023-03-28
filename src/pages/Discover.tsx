import Player from "../components/Player";
import { useEffect, useState } from "react";
import { List } from "../components/List";
import axios from "axios";
import { MusicType } from "../types/music";
import { Col, Container, Row } from "react-bootstrap";

const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);
  const [id, setId] = useState<string>("");
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
      <Row>
        {musics.map((music) => (
          <Col md={3} key={music.id}>
            <List
              img={music.album_img}
              name={music.name}
              author={music.author}
              audio={music.audio}
              genre={music.genre}
              setId={setId}
              id={id}
              musicId={music.id}
           
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Player
          musics={musics}
          id={id}
          setId={setId}
        />
      </Row>
    </Container>
  );
};

export default Discover;

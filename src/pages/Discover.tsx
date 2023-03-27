import Player from "../components/Player";
import { useEffect, useState } from "react";
import { List } from "../components/List";
import axios from "axios";
import { MusicType } from "../types/music";
import { Col, Container, Row } from "react-bootstrap";

const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await axios.get<MusicType[]>(
        "http://localhost:3009/musics"
      );
      if (response !== undefined) {
        setMusics(response.data);
        console.log(response.data);
      }
    };
    fetchDataAsync();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <Container>
   
      <Row>
        {musics.map((music) => (
          <Col md={3}>
            <List
              key={music.id}
              img={music.album_img}
              name={music.name}
              author={music.author}
              audio={music.audio}
              genre={music.genre}
              setId={setId}
              id={id}
              setIsFull={setIsFull}
              isFull={isFull}
              musicId={music.id}
              windowWidth={windowWidth}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Player
          musics={musics}
          id={id}
          setId={setId}
          setIsFull={setIsFull}
          isFull={isFull}
          windowWidth={windowWidth}
        />
      </Row>
    </Container>
  );
};

export default Discover;

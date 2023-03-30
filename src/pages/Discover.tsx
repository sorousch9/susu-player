import { List } from "../components/List";
import { MusicType } from "../types/music";
import { Col, Container, Row } from "react-bootstrap";
interface Props {
  setId: (e: string) => void;
  id: string;
  musics: MusicType[];
  setMusics: (e: MusicType[]) => void;
}
const Discover = ({ id, setId, musics, setMusics }: Props) => {
  return (
    <Container >
      <Row>
        {musics.map((music) => (
          <Col md={3} key={music.id} >
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
    </Container>
  );
};

export default Discover;

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
    <Container>
      <Row className="discover">
        {musics.map((music) => (
          <Col xs={6} md={2} key={music.id}>
            <List
              img={music.album_img}
              title={music.title}
              audio={music.audio}
              album={music.album}
              setId={setId}
              musicId={music.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Discover;
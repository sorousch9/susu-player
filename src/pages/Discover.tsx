import { MusicType } from "../types/music";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import PlayList from "../components/Playlist";
import { SusuExclusive } from "../components/SusuExclusive";
import { HotTracks } from "../components/HotTracks";
import { Featured } from "../components/Featured";
import { DjMixed } from "../components/DjMixed";
import { Footer } from "../components/Footer";
import { TrendingArtits } from "../components/TrendingArtits";
import { useDispatch } from "react-redux";
import { addMusic } from "../redux/playerReducer";
type FilteredMusicsType = {
  topMusics: MusicType[];
  exclusive: MusicType[];
  remix: MusicType[];
};
const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);
  const [filteredMusics, setFilteredMusics] = useState<FilteredMusicsType>({
    topMusics: [],
    remix: [],
    exclusive: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDataAsync = async () => {
      const url = "http://localhost:3009/musics";
      const response = await axios.get<MusicType[]>(url);
      if (response.data) {
        const filteredMusicsObject = response.data.reduce(
          (acc: FilteredMusicsType, music: MusicType) => {
            if (music.topMusics) acc.topMusics.push(music);
            if (music.exclusive) acc.exclusive.push(music);
            if (music.remix) acc.remix.push(music);
            return acc;
          },
          { topMusics: [], remix: [], exclusive: [] }
        );
        setMusics(response.data);
        setFilteredMusics(filteredMusicsObject);
      }
    };
    fetchDataAsync();
  }, []);

  return (
    <Container>
      <Row className="discover">
        <PlayList />
        <SusuExclusive exclusiveMusic={filteredMusics.exclusive} />
        <HotTracks topMusics={filteredMusics.topMusics} />
        <Featured />
        <DjMixed remixMusic={filteredMusics.remix} />
        <TrendingArtits />
        <Footer />
        {/* {musics.map((music) => (
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
        ))} */}
      </Row>
    </Container>
  );
};

export default Discover;

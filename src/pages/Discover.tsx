import { MusicType } from "../types/music";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaylistComponent from "../components/PlaylistComponent";
import { SusuExclusive } from "../components/SusuExclusive";
import { HotTracks } from "../components/HotTracks";
import { Featured } from "../components/Featured";
import { DjMixed } from "../components/DjMixed";
import { Footer } from "../components/Footer";
import TrendingArtists from "../components/TrendingArtists";
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
        <PlaylistComponent />
        <SusuExclusive exclusiveMusic={filteredMusics.exclusive} />
        <Featured remixMusic={filteredMusics.remix} />
        <HotTracks topMusics={filteredMusics.topMusics} />
        <TrendingArtists />
        <DjMixed remixMusic={filteredMusics.remix} />
        <Footer />
      </Row>
    </Container>
  );
};

export default Discover;

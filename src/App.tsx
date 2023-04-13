import Discover from "./pages/Discover";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./components/Player";
import Header from "./components/Header";
import Playlist from "./pages/PlayList";
import { MusicType } from "./types/music";
import todayHits from "./assets/todayHits.webp";
import crush from "./assets/crush.webp";
import dance from "./assets/dance.webp";
import feelGood from "./assets/feelGood.webp";
import relaxing from "./assets/relaxing.webp";
import traffic from "./assets/traffic.webp";
import { FilteredMusicsType } from "./types/filteredMusicsType";
import MusicPlaylist from "./components/MusicPlaylist";

const playlist = [
  { id: 1, img: todayHits, title: "Today Top Hits" },
  { id: 2, img: crush, title: "Crush" },
  { id: 3, img: dance, title: "Dance" },
  { id: 4, img: feelGood, title: "Feel Good" },
  { id: 5, img: relaxing, title: "Relaxing" },
  { id: 6, img: traffic, title: "Traffic" },
];
function App() {
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
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col md={9} xl={10} className="body-wrapper">
            <Header />
            <Routes>
              {playlist.map((item) => (
                <Route
                  key={item.id}
                  path={`/playlist/${item.title}`}
                  element={
                    <MusicPlaylist
                      playlistItem={item}
                      musics={musics.slice(15, 40)}
                    />
                  }
                />
              ))}
              <Route path="/playlist" element={<Playlist />} />
              <Route
                path="/"
                element={
                  <Discover
                    filteredMusics={filteredMusics}
                    playlist={playlist}
                  />
                }
              />
            </Routes>
          </Col>
        </Row>
        <Row className="player-wrapper">
          <Player />
        </Row>
      </Container>
    </BrowserRouter>
  );
}
export default App;

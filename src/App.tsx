import Discover from "./pages/Discover";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Player from "./components/Player";
import { MusicType } from "./types/music";
import axios from "axios";
import Header from "./components/Header";
function App() {
  const [id, setId] = useState<string>("");
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
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row >
          <Col md={3} xl={2} className="sidebar-wrapper" >
            <Sidebar />
          </Col>
          <Col md={9} xl={10}>
            <Routes>
              <Route
                path="/"
                element={
                  <Discover
                    id={id}
                    setId={setId}
                    musics={musics}
                    setMusics={setMusics}
                  />
                }
              />
            </Routes>
          </Col>
        </Row>
        <Row className="player-wrapper">
          <Player musics={musics} id={id} setId={setId} />
        </Row>
      </Container>
    </BrowserRouter>
  );
}
export default App;

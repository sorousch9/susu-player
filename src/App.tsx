import Discover from "./pages/Discover";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./components/Player";
import Header from "./components/Header";
import Playlist from "./pages/PlayList";
function App() {
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
              <Route path="/" element={<Discover />} />
              <Route path="/playlist" element={<Playlist />} />
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

import Discover from "./pages/Discover";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/" element={<Discover />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}
export default App;

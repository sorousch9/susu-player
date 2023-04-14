import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Playlist } from "../types/playlist";

interface PlaylistProps {
  playlist: Playlist[];
}
const PlaylistSlider: React.FC<PlaylistProps> = ({ playlist }) => {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="component-title">Playlist</h4>
          <Slider {...settings}>
            {playlist.map((item) => (
              <div
                onClick={() => navigate(`/playlist/${item.title}`)}
                key={item.id}
                className="cart-wrapper"
              >
                <Card className="card">
                  <Card.Img variant="top" src={item.img} />
                  <Card.ImgOverlay className="card-img-overlay">
                    <div className="overlay-icon">
                      <Link
                        to={`/playlist/${item.title}`}
                        className="star-icon"
                      >
                        <i className="bi bi-fullscreen" />
                      </Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className="banner">
                  <div className="content-banner">
                    <Link to="/">{item.title}</Link>
                    <i className="bi bi-music-note-list" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaylistSlider;

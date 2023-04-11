import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { MusicType } from "../types/music";
import { addToPlayer } from "../redux/playerReducer";
import { useDispatch } from "react-redux";
type Props = {
  remixMusic: MusicType[];
};
export const DjMixed = ({ remixMusic }: Props) => {
  const dispatch = useDispatch();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Container>
      <Row>
        <Col>
          <h4 className="component-title">Dj Mixes</h4>
          <Slider {...settings}>
            {remixMusic.map((music) => (
                <button
                key={music.id}
                className="cart-wrapper"
                onClick={() => dispatch(addToPlayer({ music }))}
              >
                <Card className="card">
                  <Card.Img variant="top" src={music.album_img} />
                  <Card.ImgOverlay className="card-img-overlay">
                    <div className="overlay-icon">
                      <Link to="/">
                        <i className="bi bi-play-fill" />
                      </Link>
                      <Link to="/" className="star-icon">
                        <i className="bi bi-star" />
                      </Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className="banner">
                  <div className="content-banner">
                    <Link to="/">{music.title}</Link>
                    <i className="bi bi-music-note-list" />
                  </div>
                  <Link to="/" className="sub-title">
                    {music.artist}
                  </Link>
                </div>
              </button>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

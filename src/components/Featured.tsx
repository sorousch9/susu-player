import { Card, Col, Container, Row } from "react-bootstrap";
import featured from "../assets/Featured.webp";
import featured2 from "../assets/Featured2.webp";
import { Link } from "react-router-dom";
import { addToPlayer } from "../redux/playerReducer";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { MusicType } from "../types/music";
type Props = {
  remixMusic: MusicType[];
};
export const Featured = ({ remixMusic }: Props) => {
  const dispatch = useDispatch();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
            {remixMusic.slice(7, 8).map((music) => (
              <button
                key={music.id}
                className="cart-wrapper"
                onClick={() => dispatch(addToPlayer({ music }))}
              >
                <Card className="card">
                  <Card.Img variant="top" src={featured} />
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
            {remixMusic.slice(6, 7).map((music) => (
              <button
                key={music.id}
                className="cart-wrapper"
                onClick={() => dispatch(addToPlayer({ music }))}
              >
                <Card className="card">
                  <Card.Img variant="top" src={featured2} />
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

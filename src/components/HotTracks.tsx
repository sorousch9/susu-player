import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MusicType } from "../types/music";
import { useDispatch } from "react-redux";
import { addToPlayer } from "../redux/playerReducer";
import { addToPlaylist } from "../redux/playlistReducer";
type Props = {
  topMusics: MusicType[];
};
export const HotTracks = ({ topMusics }: Props) => {
  const dispatch = useDispatch();

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
          <h4 className="component-title">Hot Track</h4>
          <Slider {...settings}>
            {topMusics.map((music) => (
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
                        <i className="bi bi-star"  onClick={() => dispatch(addToPlaylist({ music }))}/>
                      </Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className="banner">
                  <div className="content-banner">
                    <Link to="/" >
                      {music.title}
                    </Link>
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

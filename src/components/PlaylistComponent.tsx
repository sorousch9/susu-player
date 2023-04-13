import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import todayHits from "../assets/todayHits.webp";
import crush from "../assets/crush.webp";
import dance from "../assets/dance.webp";
import feelGood from "../assets/feelGood.webp";
import relaxing from "../assets/relaxing.webp";
import traffic from "../assets/traffic.webp";
import { Link } from "react-router-dom";
import { addToPlaylist } from "../redux/playlistReducer";

const PlaylistComponent = () => {
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
  const playlist = [
    { id: 1, img: todayHits, title: "Today Top Hits" },
    { id: 2, img: crush, title: "Crush" },
    { id: 3, img: dance, title: "Dance" },
    { id: 4, img: feelGood, title: "Feel Good" },
    { id: 5, img: relaxing, title: "Relaxing" },
    { id: 6, img: traffic, title: "Traffic" },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="component-title">Playlist</h4>
          <Slider {...settings}>
            {playlist.map((item) => (
              <div key={item.id} className="cart-wrapper">
                <Card className="card">
                  <Card.Img variant="top" src={item.img} />
                  <Card.ImgOverlay className="card-img-overlay">
                    <div className="overlay-icon">
                      <Link to="/">
                        <i className="bi bi-play-fill" />
                      </Link>
                      <Link to="/" className="star-icon">
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

export default PlaylistComponent;

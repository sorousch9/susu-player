import { Container, Row, Col, Card } from "react-bootstrap";
import Comethazine from "../assets/Comethazine.jpeg";
import Eminem from "../assets/Eminem.jpg";
import icecube from "../assets/ice-cube.jpg";
import kid from "../assets/kid.jpg";
import hippiesabotage from "../assets/hippie_sabotage.jpg";
import PopSmoke from "../assets/PopSmoke.webp";
import { Link } from "react-router-dom";
import Slider from "react-slick";
const TrendingArtists = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
  const artist = [
    { id: 1, img: Comethazine, title: "Comethazine" },
    { id: 2, img: Eminem, title: "Eminem" },
    { id: 3, img: icecube, title: "Ice Cube" },
    { id: 4, img: kid, title: "Kid" },
    { id: 5, img: hippiesabotage, title: "Hippie Sabotage" },
    { id: 6, img: PopSmoke, title: "Pop Smoke" },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <h4 className="component-title">Trending Artists</h4>
          <Slider {...settings}>
            {artist.map((item) => (
              <div key={item.id} className="cart-wrapper">
                <Card className="card" bg="transparent">
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{ borderRadius: "50%" }}
                  />
                  <Card.ImgOverlay
                    className="card-img-overlay"
                    style={{ borderRadius: "50%" }}
                  >
                    <div className="overlay-icon artist">
                      <Link to="/">
                        <i className="bi bi-play-fill" />
                      </Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className="banner">
                  <div className="content-banner">
                    <Link to="/" className="artist-title">
                      {item.title}
                    </Link>
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

export default TrendingArtists;

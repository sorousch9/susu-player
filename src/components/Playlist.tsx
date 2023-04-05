import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import todayHits from "../assets/todayHits.webp";
import crush from "../assets/crush.webp";
import dance from "../assets/dance.webp";
import feelGood from "../assets/feelGood.webp";
import relaxing from "../assets/relaxing.webp";
import traffic from "../assets/traffic.webp";
import { Link } from "react-router-dom";
import { Fragment } from "react";
const PlayList = () => {
  const settings = {
    dots: true,
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
          dots: true,
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
                      <Link to="/">
                        <i className="bi bi-star" />
                      </Link>
                    </div>
                  </Card.ImgOverlay>
                </Card>
                <div className="content-banner">
                  <span>{item.title}</span>
                  <i className="bi bi-music-note-list" />
                </div>
              </div>
            ))}
            <div>
              <h3>Slide 2</h3>
            </div>
            <div>
              <h3>Slide 3</h3>
            </div>
            <div>
              <h3>Slide 4</h3>
            </div>
            <div>
              <h3>Slide 5</h3>
            </div>
            <div>
              <h3>Slide 6</h3>
            </div>
            <div>
              <h3>Slide 7</h3>
            </div>
            <div>
              <h3>Slide 8</h3>
            </div>
            <div>
              <h3>Slide 9</h3>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayList;

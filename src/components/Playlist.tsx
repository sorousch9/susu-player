import Slider from "react-slick";
import { Container, Row, Col, Card } from "react-bootstrap";
import todayHits from "../assets/todayHits.webp";
import { Link } from "react-router-dom";
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

  return (
    <Container>
      <Row>
        <Col>
          <Slider {...settings}>
            <Card className="card">
              <Card.Img variant="top" src={todayHits} />
              <Card.ImgOverlay className="card-img-overlay">
                <div className="overlay-icon">
                  <Link to="/">
                    <i className="bi bi-play-fill"></i>
                  </Link>
                  <Link to="/">
                    <i className="bi bi-star"></i>
                  </Link>
                </div>
              </Card.ImgOverlay>
            </Card>
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

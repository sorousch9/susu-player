import { Card, Col, Row } from "react-bootstrap";

type Props = {
  img: string;
  name: string;
  author: string;
  audio: string;
  id: string;
  musicId: string;
  genre: string;
  setId: (e: string) => void;
};

export const List = ({
  img,
  name,
  author,
  audio,
  musicId,
  id,
  genre,
  setId,
}: Props) => {
  return (
    <Row>
      <Col>
        <Card onClick={() => setId(musicId)} bg="transparent">
          <Card.Img src={img} alt={name} />
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <audio src={audio} />
        </Card>
      </Col>
    </Row>
  );
};

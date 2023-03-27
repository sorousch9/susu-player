import { Card, Col, Row } from "react-bootstrap";

type Props = {
  img: string;
  name: string;
  author: string;
  audio: string;
  id: string;
  isFull: boolean;
  musicId: string;
  genre: string;
  windowWidth: number;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
};

export const List = ({
  img,
  name,
  author,
  audio,
  musicId,
  isFull,
  id,
  genre,
  windowWidth,
  setId,
}: Props) => {
  return (
    <Row>
      <Col>
        <Card onClick={() => setId(musicId)}>
          <Card.Img src={img} alt={name} />
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <audio src={audio} />
        </Card>
      </Col>
    </Row>
  );
};

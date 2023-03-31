import { Card, Col, Row } from "react-bootstrap";

type Props = {
  img: string;
  title: string;
  audio: string;
  album: string;
  musicId: string;
  setId: (e: string) => void;
};

export const List = ({ img, title,album, audio, musicId, setId }: Props) => {
  return (
    <Row>
      <Col>
        <Card onClick={() => setId(musicId)} bg="transparent">
          <Card.Img src={img} alt={title} />
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{album}</Card.Subtitle>
          <audio src={audio} />
        </Card>
      </Col>
    </Row>
  );
};

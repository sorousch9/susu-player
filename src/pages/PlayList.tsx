import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromPlaylist } from "../redux/playlistReducer";
import { addToPlayer } from "../redux/playerReducer";
import { Card, Col, Row, Table } from "react-bootstrap";
import headImg from "../assets/playlistCom.webp";

const Playlist = () => {
  const playlist = useSelector((state: RootState) => state.playlist.musics);
  const dispatch = useDispatch();
  const handleRemove = (id: string) => {
    dispatch(removeFromPlaylist(id));
  };

  return (
    <div className="list">
      <Card style={{ maxWidth: "480px" }} bg="transparent">
        <Row>
          <Col>
            <Card.Img src={headImg} />
          </Col>
          <Col>
            <Card.Body>
              <span></span>
              <div>
                <h2>My Playlist</h2>
                <Card.Text>your favorite music are here</Card.Text>
              </div>
              <Card.Text>
                <small>{playlist.length} Songs</small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Table>
        <caption>List of your playlist</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {playlist.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={4}>Your playlist is empty</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {playlist.map((music, index) => (
              <tr key={music.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={music.album_img} alt={music.title} />
                  {music.title}
                </td>
                <td onClick={() => dispatch(addToPlayer({ music }))}>
                  <i className="bi bi-play-circle" />
                </td>
                <td onClick={() => handleRemove(music.id)}>
                  <i className="bi bi-x" />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Playlist;

import React from "react";
import { useDispatch } from "react-redux";
import { MusicType } from "../types/music";
import { addToPlaylist } from "../redux/playlistReducer";
import { addToPlayer } from "../redux/playerReducer";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Playlist } from "../types/playlist";
interface PlaylistProps {
  musics: MusicType[];
  playlistItem: Playlist;
}

const MusicPlaylist: React.FC<PlaylistProps> = ({ musics, playlistItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="list">
      <Card style={{ maxWidth: "480px" }} bg="transparent">
        <Row>
          <Col>
            <Card.Img src={playlistItem.img} />
          </Col>
          <Col>
            <Card.Body>
              <span></span>
              <div>
                <h2>{playlistItem.title}</h2>
                <Card.Text>{playlistItem.description}</Card.Text>
              </div>
              <Card.Text>
                <small>{musics.length} Songs</small>
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
        {musics.length === 0 ? (
          <tbody>
            <tr>
              <td colSpan={4}>Your playlist is empty</td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {musics.map((music, index) => (
              <tr key={music.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={music.album_img} alt={music.title} />
                  {music.title}
                </td>
                <td onClick={() => dispatch(addToPlayer({ music }))}>
                  <i className="bi bi-play-circle" />
                </td>
                <td onClick={() => dispatch(addToPlaylist({ music }))}>
                  <i className="bi bi-star" />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default MusicPlaylist;

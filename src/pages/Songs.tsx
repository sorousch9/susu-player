import { addToPlayer } from "../redux/playerReducer";
import { Card, Col, Row, Table } from "react-bootstrap";
import headImg from "../assets/playlistCom.webp";
import { MusicType } from "../types/music";
import { useDispatch } from "react-redux";
import { addToPlaylist } from "../redux/playlistReducer";
interface MusicProps {
  musics: MusicType[];
}

const Songs: React.FC<MusicProps> = ({ musics }) => {
  const dispatch = useDispatch();

  return (
    <div className="list">
     <h1>Songs</h1>
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
                <td onClick={() => dispatch(addToPlaylist({ music }))}>
                  <i className="bi bi-star" />
                </td>
                <td onClick={() => dispatch(addToPlayer({ music }))}>
                  <i className="bi bi-play-circle" />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Songs;

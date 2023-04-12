import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MusicType } from "../types/music";
import { RootState } from "../redux/store";
import { addToPlaylist, removeFromPlaylist } from "../redux/playlistReducer";
interface PlaylistProps {
  musics?: MusicType[];
}

const Playlist: React.FC<PlaylistProps> = ({ musics }) => {
  const playlist = useSelector((state: RootState) => state.playlist.musics);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (musics) {
      musics.forEach((music) => {
        dispatch(addToPlaylist({ music }));
      });
    }
  }, [dispatch, musics]);

  const handleRemove = (id: string) => {
    dispatch(removeFromPlaylist(id));
  };

  return (
    <div className="playlist">
      <table>
        <caption>List of Songs</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Song</th>
            <th>Time</th>
            <th>Action</th>
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
            {playlist.map((music) => (
              <tr key={music.id}>
                <td>1</td>
                <td>
                  <img src={music.album_img} alt={music.title} />
                  {music.title}
                </td>
                <td>00:00</td>
                <td
                  onClick={() => handleRemove(music.id)}
                  className="table-btn"
                >
                  <i className="bi bi-x" />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Playlist;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MusicType } from "../types/music";
import { RootState } from "../redux/store";
import { addToPlaylist, removeFromPlaylist } from "../redux/playlistReducer";
import { addToPlayer } from "../redux/playerReducer";
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
      </table>
    </div>
  );
};

export default Playlist;

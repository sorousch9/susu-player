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
      <h2>Playlist</h2>
      {playlist.length === 0 ? (
        <p>Your playlist is empty</p>
      ) : (
        <ul>
          {playlist.map((music) => (
            <li key={music.id}>
              {music.title} - {music.artist}{" "}
              <button onClick={() => handleRemove(music.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Playlist;

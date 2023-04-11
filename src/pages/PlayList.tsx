import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PlayList = () => {
  const playlist = useSelector((state: RootState) => state.playlist);
  console.log(playlist.musics);
  return (
    <div>
      {playlist.musics.map((music) => (
        <ul key={music.id}>
          <li>{music.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default PlayList;

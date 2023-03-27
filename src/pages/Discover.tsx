import Player from "../components/Player";
import { useEffect, useState } from "react";
import "./App.css";
import { PlayList } from "../components/PlayList";
import axios from "axios";
import { MusicType } from "../types/music";

const Discover = () => {
  const [musics, setMusics] = useState<MusicType[]>([]);
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);


  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await axios.get<MusicType[]>("http://localhost:3009/musics");
      if (response !== undefined) {
        setMusics(response.data);
        console.log(response.data);
      }
    };
    fetchDataAsync();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div>
      <div className="discover">
        <div className="top">
          
            
          <div className="divSongs">
            <div>
              {musics.map((music) => (
                <PlayList
                  key={music.id}
                  img={music.album_img}
                  name={music.name}
                  author={music.author}
                  audio={music.audio}
                  genre={music.genre}
                  setId={setId}
                  id={id}
                  setIsFull={setIsFull}
                  isFull={isFull}

                  windowWidth={windowWidth}
                />
              ))}
            </div>
          </div>
        </div>
       
      </div>
      <Player
        musics={musics}
        id={id}
        setId={setId}
        setIsFull={setIsFull}
        isFull={isFull}
        windowWidth={windowWidth}
      />
    </div>
  );
};

export default Discover;

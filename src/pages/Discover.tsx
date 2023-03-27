import Musicbox from "../components/Musicbox";
import { useEffect, useState } from "react";

const Discover = () => {
  const [id, setId] = useState<string>("");
  const [isFull, setIsFull] = useState<boolean>(false);

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div>
      <div className="discover"></div>
      <Musicbox
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

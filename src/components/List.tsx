type Props = {
  img: string;
  name: string;
  author: string;
  audio: string;
  id: string;
  isFull: boolean;
  genre: string;
  windowWidth: number;
  setId: (e: string) => void;
  setIsFull: (e: boolean) => void;
};

export const List = ({
  img,
  name,
  author,
  audio,
  isFull,
  id,
  genre,
  windowWidth,
  setId,
}: Props) => {
  return (
    <div className="playList">
      <div className="divAll">
        <div className="containerFull">
          <div className="divFull">
            <img src={img} alt={name} />
            <h4>{name}</h4>
            <h3>{author}</h3>
            <audio src={audio} />
          </div>
        </div>
      </div>
    </div>
  );
};

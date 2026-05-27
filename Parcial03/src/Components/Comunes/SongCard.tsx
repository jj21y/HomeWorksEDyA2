import type { Song } from "../../Types/Song.Types";

interface Props {
  song: Song;
  onClick?: () => void;
}

export const SongCard = ({song, onClick}: Props) => {
  return (
    <div className="song-card" onClick={onClick}>
      <h3>{song.title}</h3>
      <p>👤{song.artist}</p>
      <span>🔥{song.popularity}</span>
    </div>
  );
};
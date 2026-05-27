import { SongCard } from "../Comunes/SongCard";
import { useMusicContext } from "../../MusicContext";

export const RankingPanel = () => {const { topSongs } = useMusicContext();
  return (
    <div className="panel">
      <h2>🔥 Top Songs 🔥</h2>
      <div className="songs-grid">
        {topSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
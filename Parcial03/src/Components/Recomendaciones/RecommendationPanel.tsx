import { SongCard } from "../Comunes/SongCard";
import { useMusicContext } from "../../MusicContext";

export const RecommendationPanel = () => {
  const { recommendations } = useMusicContext();
  return (
    <div className="panel">
      <h2>🔎 Recommendations 🔍</h2>
      <div className="songs-grid">
        {recommendations.map((song) => (
          <SongCard
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
};
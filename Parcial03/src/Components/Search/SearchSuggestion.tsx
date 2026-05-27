import { useState } from "react";
import { SearchInput } from "../Comunes/SearchInput";
import { SongCard } from "../Comunes/SongCard";
import { useMusicContext } from "../../MusicContext";

export const SearchSuggestions = () => {
  const {
    searchResults,
    searchSongs,
    selectSong,
  } = useMusicContext();

  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);

    searchSongs(value);
  };

  return (
    <div className="panel">
      <h2>🎹 Search Songs 🎸</h2>
      <SearchInput
        value={input}
        onChange={handleChange}
      />

      <div className="songs-grid">
        {searchResults.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onClick={() => selectSong(song.id)}
          />
        ))}
      </div>
    </div>
  );
};
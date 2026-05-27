import { createContext, useContext, useEffect, useState } from "react";
import { MusicSystem } from "./MusicSystem";
import { useMusicSystem } from "./useMusicSystem";
import { MockSongs } from "./MockData/MockSongs"
import type { Song } from "./Types/Song.Types";

interface MusicContextProps {
  searchResults: Song[];
  topSongs: Song[];
  recommendations: Song[];

  searchSongs: (value: string) => void;

  selectSong: (songId: string) => void;
}

const MusicContext = createContext<MusicContextProps>(
  {} as MusicContextProps
);

export const MusicProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const system = useMusicSystem();

  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const [topSongs, setTopSongs] = useState<Song[]>([]);

  const [recommendations, setRecommendations] = useState<Song[]>([]);

  useEffect(() => {
    system.loadSongs(mockSongs);

    setTopSongs(system.getTopSongs(5));
  }, [system]);

  const searchSongs = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchResults(system.searchSongs(value));
  };

  const selectSong = (songId: string) => {
    setRecommendations(
      system.getRecommendations(songId)
    );
  };

  return (
    <MusicContext.Provider
      value={{
        searchResults,
        topSongs,
        recommendations,
        searchSongs,
        selectSong,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  return useContext(MusicContext);
};
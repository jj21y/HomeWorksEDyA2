import { DashboardPage } from "./Pages/DashBoardPage";
import { MusicProvider } from "./MusicContext";
import "./main.scss"

export const App = () => {
  return (
    <MusicProvider>
      <DashboardPage />
    </MusicProvider>
  );
};
import { DashboardPage } from "./Pages/DashBoardPage";
import { MusicProvider } from "./MusicContext";
import "./styles/main.scss";

export const App = () => {
  return (
    <MusicProvider>
      <DashboardPage />
    </MusicProvider>
  );
};
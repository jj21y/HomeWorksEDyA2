import { SearchSuggestions } from "../Components/Search/SearchSuggestion";
import { RankingPanel } from "../Components/Ranking/RankingPanel";
import { RecommendationPanel } from "../Components/Recomendaciones/RecommendationPanel";

export const DashboardPage = () => {
  return (
    <div className="dashboard">
      <SearchSuggestions />
      <RankingPanel />
      <RecommendationPanel />
    </div>
  );
};
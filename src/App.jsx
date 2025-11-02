import OverviewHero from "./components/OverviewHero";
import Features from "./components/Features";
import LiveDashboardMock from "./components/LiveDashboardMock";
import ReportsAndWorkflows from "./components/ReportsAndWorkflows";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <OverviewHero />
      <Features />
      <LiveDashboardMock />
      <ReportsAndWorkflows />
      <FooterCTA />
    </div>
  );
}

export default App;

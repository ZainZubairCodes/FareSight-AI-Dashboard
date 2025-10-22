import { useState } from "react";
import { LandingPage } from "./Components/LandingPage";
import { Dashboard } from "./Components/Dashboard";

export default function App() {
  const [currentView, setCurrentView] = useState<"landing" | "dashboard">("landing");

  return (
    <>
      {currentView === "landing" ? (
        <LandingPage onGetStarted={() => setCurrentView("dashboard")} />
      ) : (
        <Dashboard onBackToHome={() => setCurrentView("landing")} />
      )}
    </>
  );
}

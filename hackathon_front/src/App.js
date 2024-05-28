import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Data from './pages/Data';
import Visualizations from './pages/Visualizations';
import Analysis from './pages/Analysis';
import OlympicFacts from './pages/OlympicFacts';
import MedalPredictions from './pages/MedalPredictions';
import MedalsTimeline from './pages/MedalsTimeline';
import GenderBodyComposition from './pages/GenderBodyComposition';
import MedalsVsGDP from './pages/MedalsVsGDP';
import MedalsWorldViewSeasons from './pages/MedalsWorldViewSeasons';
import MedalsWorldViewSport from './pages/MedalsWorldViewSport';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<Data />} />
          <Route path="/visualizations" element={<Visualizations />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/olympic-facts" element={<OlympicFacts />} />
          <Route path="/olympic-medal-predictions" element={<MedalPredictions />} />
          <Route path="/medals-timeline" element={<MedalsTimeline />} />
          <Route path="/gender-body-composition" element={<GenderBodyComposition />} />
          <Route path="/medals-vs-gdp" element={<MedalsVsGDP />} />
          <Route path="/medals-world-view-seasons" element={<MedalsWorldViewSeasons />} />
          <Route path="/medals-world-view-sport" element={<MedalsWorldViewSport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

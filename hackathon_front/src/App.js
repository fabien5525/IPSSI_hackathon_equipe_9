import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import MedalPredictions from './pages/MedalPredictions';
import Games from './pages/Games';
import Athletes from './pages/Athletes';
import Countries from './pages/Countries';
import Participations from './pages/Participations';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/participations" element={<Participations />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/olympic-medal-predictions" element={<MedalPredictions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

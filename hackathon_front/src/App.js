import React, { useState } from 'react';
import './App.css';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#data">DATA</a></li>
            <li className="dropdown">
              <a href="#visualizations" onClick={toggleDropdown}>
                VISUALIZATIONS <span className="dropdown-icon">&#9662;</span>
              </a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#medals-timeline">Medals Timeline</a></li>
                  <li><a href="#gender-body-composition">Gender & Body Composition</a></li>
                  <li><a href="#medals-vs-gdp">Medals VS GDP</a></li>
                  <li><a href="#medals-world-view-seasons">Medals World View - Seasons</a></li>
                  <li><a href="#medals-world-view-sport">Medals World View - Sport</a></li>
                </ul>
              )}
            </li>
            <li><a href="#analysis">ANALYSIS</a></li>
            <li><a href="#olympic-facts">OLYMPIC FACTS</a></li>
            <li><a href="#olympic-medal-predictions">OLYMPIC MEDAL PREDICTIONS</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="data">
          <h2>Data</h2>
          <p>Content for Data page...</p>
        </section>
        <section id="medals-timeline">
          <h2>Medals Timeline</h2>
          <p>Content for Medals Timeline...</p>
        </section>
        <section id="gender-body-composition">
          <h2>Gender & Body Composition</h2>
          <p>Content for Gender & Body Composition...</p>
        </section>
        <section id="medals-vs-gdp">
          <h2>Medals VS GDP</h2>
          <p>Content for Medals VS GDP...</p>
        </section>
        <section id="medals-world-view-seasons">
          <h2>Medals World View - Seasons</h2>
          <p>Content for Medals World View - Seasons...</p>
        </section>
        <section id="medals-world-view-sport">
          <h2>Medals World View - Sport</h2>
          <p>Content for Medals World View - Sport...</p>
        </section>
        <section id="analysis">
          <h2>Analysis</h2>
          <p>Content for Analysis page...</p>
        </section>
        <section id="olympic-facts">
          <h2>Olympic Facts</h2>
          <p>Content for Olympic Facts page...</p>
        </section>
        <section id="olympic-medal-predictions">
          <h2>Olympic Medal Predictions</h2>
          <p>Content for Olympic Medal Predictions page...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
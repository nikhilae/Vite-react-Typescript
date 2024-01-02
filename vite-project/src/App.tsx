import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import style from "./style.css";
import Projects from "./components/Projects";
import Frontpage from "./components/Frontpage";
function App() {
  return (
    <div className="page">
      <Router>
        <div>
          <Link to="/Frontpage" className="frontpage">
            Home
          </Link>
          <Link to="/About" className="about">
            About
          </Link>
          <Link to="/Projects" className="projects">
            projects
          </Link>

          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Frontpage" element={<Frontpage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

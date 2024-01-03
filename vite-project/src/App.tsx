import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import style from "./style.css";
import Projects from "./components/Projects";
import React, { useState, useEffect } from "react";
import Frontpage from "./components/Frontpage";
import { FaGithub, FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <Link
        to="/Frontpage"
        className="text-5xl py-2 dark:text-white md:text-6xl"
      >
        <TiHome />
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
    </Router>
  );
};

export default App;

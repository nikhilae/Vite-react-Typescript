import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import style from "./style.css";

function App() {
  return (
    <Router>
      <div>
        <h1>Hello</h1>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>

        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

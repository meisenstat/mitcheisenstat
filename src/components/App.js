import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import About from './About.js';
import Home from './Home.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />

        <header className="Nav-bar">
          
          
          
          <NavLink to="/about" className="Nav-links">About</NavLink>
          <NavLink to="/projects" className="Nav-links">Projects</NavLink>
          <NavLink to="/experience" className="Nav-links">Experience</NavLink>
          <NavLink to="/" className="Nav-links">Home</NavLink>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
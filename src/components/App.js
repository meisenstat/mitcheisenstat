import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Contact from './Contact.js';
import Home from './Home.js';
import Experience from './Experience.js';
import Projects from './Projects.js';
import Resume from './Resume.js';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
        <Route path="/resume" component={Resume} />

        <header className="Nav-bar">
          <NavLink to="/resume" className="Nav-links" activeClassName="active">Resume</NavLink>
          <NavLink to="/contact" className="Nav-links" activeClassName="active">Contact</NavLink>
          <NavLink to="/projects" className="Nav-links" activeClassName="active">Projects</NavLink>
          <NavLink to="/experience" className="Nav-links" activeClassName="active">Experience</NavLink>
          <NavLink exact to="/" className="Nav-links" activeClassName="active">Home</NavLink>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import logo from './logo.svg';
import linkedin from './linkedin.svg';
import github from './github.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mitch Eisenstat</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <a href="https://www.linkedin.com/in/mitch-eisenstat/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="Social-logo" alt="Linkedin"/>
        </a>
        <a href="https://github.com/meisenstat/" target="_blank" rel="noopener noreferrer">
          <img src={github} className="Social-logo" alt="GitHub"/>
        </a>
      </footer>
    </div>
  );
}

export default App;

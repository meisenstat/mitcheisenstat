import React from 'react';
import linkedin from '../assets/images/linkedin.svg';
import github from '../assets/images/github.svg';
import './App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Mitch Eisenstat</h1>
            </header>
            <div className="intro">
                <p>
                    My name is Mitch Eisenstat. I am a senior at Wake Forest University double majoring 
                    in Computer Science and Applied Mathemetics.
                </p>
                <p>
                    I have worked at a handful of startups in various industries ranging from recruiting software
                    to biotech. I have done extensive work in high performance computing, both through work experience
                    and a competition team that I have been on the past two years.
                </p>
                <p>
                    I am currently looking for entry level software engineer positions at tech companies. I am 
                    primarily looking at positions located in New York City. 
                </p>
            </div>
            <footer className="App-footer">
                <a href="https://www.linkedin.com/in/mitch-eisenstat/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} className="Social-logo" alt="Linkedin" />
                </a>
                <a href="https://github.com/meisenstat/" target="_blank" rel="noopener noreferrer">
                    <img src={github} className="Social-logo" alt="GitHub" />
                </a>
            </footer>
        </div>
    );
}

export default Home;
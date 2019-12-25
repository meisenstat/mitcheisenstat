import React from 'react';
import resumePNG from '../assets/images/Resume.png'
import resumePDF from '../assets/images/Resume.pdf';
import './App.css';

function Resume() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Resume</h1>
            </header>
            <div className="App-body">
                <div>
                    <p align="center">
                        <img className="resume" src={resumePNG} alt="resume"></img>
                    </p>
                    <p align="center">
                        <a href={resumePDF} target="_blank" rel="noopener noreferrer" style={{color:"red"}}>Download Resume.pdf</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;
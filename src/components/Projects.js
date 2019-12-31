import React from 'react';
import './App.css';
import gymHome from '../assets/images/gym-home.png';
import gymFree from '../assets/images/gym-free.png';
import deHome from '../assets/images/de-home.png';
import deOrder from '../assets/images/de-order.png';
import deProf from '../assets/images/de-prof.png';

function Projects() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Projects and Clubs</h1>
            </header>
            <div className="App-body">
                <div>
                    <h2 className="Act-company">Wake Forest High Performance Computing Team</h2>
                    <h3 className="Act-title">Team Lead, Benchmarking Specialist</h3>
                    <div>
                        <p className="Act-desc">
                            Over the past two years, I have been part of a high performance computing team
                            representing Wake Forest at competitions. Both years, I have acted as the team captain due to my
                            technical experience and my desire to lead. My primary technical role on the team
                            has been benchmarking, specifically the CUDA implementations of HPL and HPCG.
                            This involves careful power monitoring, hardware tuning and software adjustments.
                            I have done extensive bash scripting as a result of this both for install scripts
                            and run files. Here is an <a href="https://news.wfu.edu/2019/10/25/wfu-awards-and-recognitions-briefs-33/" style={{color: "red"}}>article</a> describing our work as a team.
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="Act-company">Wake Forest Gym App</h2>
                    <h3 className="Act-title">Project Head, Lead iOS Developer</h3>
                    <div>
                        <p className="Act-desc">
                            I am building a Swift app to track and display gym usage at Wake Forest. This is being 
                            built to to help students find lower traffic times to use the gym. I’ve built the backend 
                            in Java and it runs on AWS. The backend keeps track of the current usage at a given time 
                            and stores that data so it can be used to visualize trends over time. The app displays 
                            both the current number of students in the gym and a graph with the running average of users
                            in an area of the gym throughout the day.
                        </p>
                        <img src={gymHome} className="Act-img" alt=""></img>
                        <img src={gymFree} className="Act-img" alt=""></img>
                    </div>
                </div>
                <div>
                    <h2 className="Act-company">Deacon Eats</h2>
                    <h3 className="Act-title">Lead iOS Developer</h3>
                    <div>
                        <p className="Act-desc">
                            As part of a Software Engineering class I took at Wake Forest, one of the semester 
                            objectives was to build a working software product using the Agile development methodology. 
                            We built an iOS app that was essentially the student run, campus equivalent to UberEats. 
                            My role on the project was the lead Swift developer. I was the only one on my team who 
                            had any experience working in the language so I not only did a majority of the development 
                            but I also helped teach my other teammates about Swift and iOS development. I really 
                            love the leader role in a team since it allows me to assist my team members and make 
                            critical decisions when needed.
                        </p>
                        <p className="Act-desc">
                            The source of this project can be found at <a href="https://github.com/meisenstat/Deacon-Eats" target="_blank" rel="noopener noreferrer" style={{color: "red"}}>https://github.com/meisenstat/Deacon-Eats</a>
                        </p>
                        <img src={deHome} className="Act-img" alt=""></img>
                        <img src={deOrder} className="Act-img" alt=""></img>
                        <img src={deProf} className="Act-img" alt=""></img>
                    </div>
                </div>
                <div>
                    <h2 className="Act-company">Stealth Startup</h2>
                    <h3 className="Act-title">Founder, Lead Developer</h3>
                    <div>
                        <p className="Act-desc">
                            I am one of three founders of a startup in the sports analytics industry. I am the lead 
                            developer on the project so I am in charge of making all of the design decisions and 
                            writing a majority of the code. Our team has received funding from Wake Forest and we are
                            part of a startup incubator the University runs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
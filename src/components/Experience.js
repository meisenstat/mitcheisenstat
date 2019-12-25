import React from 'react';
import './App.css';

function Experience() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-header-text">Work Experience</h1>
            </header>
            <div className="App-body">
                <div>
                    <h2 className="Act-company">Fluid HPC</h2>
                    <h3 className="Act-title">Development Intern</h3>
                    <p className="Act-desc">
                        Fluid HPC is a platform allowing researchers to easily scale high performance computing workloads on the AWS
                        cloud. I worked as the lead for managing the operating system our customers work on. This included installing
                        necessary HPC software, increasing scaling efficiency, and building demos for customers. I worked extensively
                        on AWS primarily using computing and scaling resources such as EC2, S3, ParallelCluster and CloudFormation.
                        Additionally, I frequently met with customers to discuss timelines and goals for specific projects as the technical
                        lead.
                    </p>
                </div>
                <div>
                    <h2 className="Act-company">TeselaGen Biotechnology</h2>
                    <h3 className="Act-title">Software Engineer Intern</h3>
                    <p className="Act-desc">
                        TeselaGen Biotechnology is accelerating the design and fabrication of DNA with synthetic biology software. At
                        TeselaGen, I worked as a Software Engineering Intern primarily working in JavaScript with the React Redux
                        framework. I also completely a few stories doing backend work with NodeJS. I worked alongside senior
                        developers to resolve open tickets and fix bugs. My final role was to assist in the quality assurance process to
                        ensure a stable release application.
                    </p>
                </div>
                <div>
                    <h2 className="Act-company">TextRecruit</h2>
                    <h3 className="Act-title">AI Specialist Intern</h3>
                    <p className="Act-desc">
                        TextRecruit is a candidate engagement platform that leverages text, chat and AI to hire better people, faster. I 
                        worked as an AI Specialist Intern, leading a team of other entry level engineers and college students to build out 
                        the AI chatbot called that the TextRecruit platform used. Ari is an AI-powered chatbot that assists recruiters 
                        in announcing job openings, screening candidates, scheduling interviews, onboarding new employees and answering 
                        frequently asked HR questions. A majority of my time was spent building out this AI chatbot 
                        but towards the end of my time at TextRecruit I focused on managing my team and interacting with customers.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
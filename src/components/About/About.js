import React from "react";
import './About.css';


function AboutDiv(props) {
    return (
        <div className="container">
            <h1>David, Web Developer</h1>
            <h3>Fresh coding bootcamp graduate needs a job</h3>
            <p className="summary">Starting in October 2022, I entered the Full Stack Coding Bootcamp provided by UW and Trinity. I have acquired many new skills, including:</p>
            <ul className="skill-list">
                <li>Building a web page with basic HTML, CSS and Javacsript</li>
                <li>Organizing databases, classes and associations</li>
                <li>Constructing custom APIs and making fetch requests</li>
                <li>Building a responsive React app</li>
                <li>Research using Google, Stack Overflow, Github</li>
            </ul>
        </div>
    );
}

export default AboutDiv;
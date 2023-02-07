import React from "react";
import { css } from '@emotion/css';
import mtPic from '../../assets/Images/mountain_pic.jpg'


const h1Style = `
display: flex;
position: relative;
bottom: 20rem;
width: 50vw;
align-items: center;
justify-content: center;
padding: 32px;
background-color: rgb(213, 179, 70);
font-size: 24px;
border-radius: 30px;
color: white;
`

const picStyle = `
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 5rem;
width: 92vw;
height: 60rem;
background-image: url(${mtPic});
background-color: rgb(150, 160, 140);
background-position: center;
background-repeat: no-repeat;
background-size: contain;
border-radius: 5%;
flex-direction: column;
`

const subStyle = `
display: flex;
position: relative;
bottom: 20rem;
background-color: rgb(0, 100, 200);
font-size: 1.25rem;
line-height: 1.5rem;
`

const contentStyle = `
display: flex;
position: relative;
text-align: center;
width: 30rem;
bottom: 20rem;
color: rgb(0, 0, 0);
font-size: 1.25rem;
font-weight: 500;
line-height: 1.5rem;
`

const listStyle = `
display: flex;
flex-direction: column;
position: relative;
text-align: center;
width: 30rem;
bottom: 20rem;
background-color: rgb(0, 100, 50, 0.5);
font-size: 1.25rem;
line-height: 1.8rem;
`


function AboutDiv(props) {
    return (
        <div className={css(picStyle)}>
            <h1 className={css(h1Style)}>David, Web Developer</h1>
            <h3 className={css(subStyle)}>Fresh coding bootcamp graduate needs a job</h3>
            <p className={css(contentStyle)}>Starting in October 2022, I entered the Full Stack Coding Bootcamp provided by UW and Trinity. I have acquired many new skills, including:</p>
            <ul className={css(listStyle)}>
                <li>Building a web page with basic HTML, CSS and Javacsript</li>
                <li>Organizing databases, classes and asociations</li>
                <li>Constructing custom APIs and making fetch requests</li>
                <li>Building a responsive React app</li>
                <li>Research using Google, Stack Overflow, Github</li>
            </ul>
        </div>
    );
}

export default AboutDiv;
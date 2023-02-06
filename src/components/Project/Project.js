import React from "react";
import { css } from '@emotion/css';

// TODO STYLING
const cardStyle = `
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: auto;
margin-bottom: 5rem;
padding: 10rem 10rem;
width: 100rem;
height: 25rem;
`


function ProjectDiv({ title, Github, liveLink, image}) {
    return (
            {/* Projects will be iterated through with the map method to display cards of my projects */},
            {/* or no, this will just be the template that Portfolio uses by passing the projects array info into the Project component when we map through. */},

            <div style={{background: `url(${image})`}} className={css(cardStyle)}>
                {/* <h1>{title}</h1> */}
                <a href={Github} target="_blank" rel="noopener noreferrer">{Github}</a>
                <br></br>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">{liveLink}</a>
            </div>
    )
}



export default ProjectDiv;
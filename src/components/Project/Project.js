import React from "react";

function ProjectDiv({ title, Github, liveLink, date, image}) {
    return (
            {/* Projects will be iterated through with the map method to display cards of my projects */},
            {/* or no, this will just be the template that Portfolio uses by passing the projects array info into the Project component when we map through. */},

            <div style={{background: `url(${image})`}}>
                <h1>{title}</h1>
                <h3>{date}</h3>
                <a href={Github} target="_blank" rel="noopener noreferrer">{Github}</a>
                <br></br>
                <a href={liveLink} target="_blank" rel="noopener noreferrer">{liveLink}</a>
            </div>
    )
}



export default ProjectDiv;
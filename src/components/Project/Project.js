import React from "react";
import { css } from "@emotion/css";

function ProjectDiv({ title, Github, liveLink, image }) {
  // styling had to be inside the function to use props for image

  // getting stuck on styling here, cant get things to stay centered
  const cardStyle = `
display: flex;
width: 80vw;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: auto;
margin-bottom: 2rem;
padding: 1rem 1rem;
height: 15vh;
background-image: url(${image});
background-repeat: no-repeat;
background-size: contain;

@media ONLY screen AND (min-width: 1100px) {
flex-direction: row;
}
`;

  const linkStyle = `
flex-direction: row;
font-size: calc(2px + 2vw);
width: 25vw;
text-align: center;
background-color: rgb(204, 182, 34, 0.7);
border-radius: 50px;
padding: 5px 15px;
}
`;

  const repoLink = `
font-size: calc(2px + 2vw);
width: 20vw;
`;

  return (
    <div>
      <div className={css(cardStyle)}></div>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className={css(linkStyle)}
      >
        {title}
      </a>
      <a
        href={Github}
        target="_blank"
        rel="noopener noreferrer"
        className={css(linkStyle, repoLink)}
      >
        Github Repository
      </a>
    </div>
  );
}

export default ProjectDiv;

import React from "react";
import { css } from "@emotion/css";

// TODO STYLING

function ProjectDiv({ title, Github, liveLink, image }) {
  const cardStyle = `
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
justify-content: center;
margin: auto;
margin-bottom: 2rem;
padding: 10rem 10rem;
max-width: 100rem;
min-width: 25rem;
height: 25rem;
background-image: url(${image});
background-repeat: no-repeat;
background-size: contain;
`;

  const linkStyle = `
font-size: 2rem;
background-color: rgb(204, 182, 34, 0.7);
border-radius: 50px;
padding: 0 15px;
position: relative;
bottom: 15rem;
`;
  return (
    (
      <div className={css(cardStyle)}>
        <a
          href={Github}
          target="_blank"
          rel="noopener noreferrer"
          className={css(linkStyle)}
        >
          {Github}
        </a>
        <br></br>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className={css(linkStyle)}
        >
          {liveLink}
        </a>
      </div>
    )
  );
}

export default ProjectDiv;

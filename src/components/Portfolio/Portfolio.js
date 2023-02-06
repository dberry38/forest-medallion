import React from "react";
import ProjectDiv from "../Project/Project";
import { projectArray } from "./projectArray";


// TODO STYLING


function PortfolioDiv(props) {
  return (
    <div className="container">
      {/* <main className="star-project">Hero Project</main> */},
      {/* so the idea with the hero project is that theere will be one main project being displayed as a 'hero', with the rest shown below in cards. That will be coming later. Probably way later. */}
      <div className="list-section">
        {projectArray.map((project) => {
          return (
            <ProjectDiv
              title={project.title}
              Github={project.Github}
              liveLink={project.liveLink}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioDiv;

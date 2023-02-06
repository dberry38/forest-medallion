import React from "react";
import ProjectDiv from "../Project/Project";
import { projectArray } from "./projectArray";


// TODO STYLING


function PortfolioDiv(props) {
  return (
    <div className="container">
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

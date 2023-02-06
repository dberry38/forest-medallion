import React from "react";
import ProjectDiv from "../Project/Project";
import { projectArray } from "./projectArray";

function PortfolioDiv(props) {
  return (
    <div className="container">
      <main className="star-project">Hero Project</main>
      <div className="list-section">
        {projectArray.map((project) => {
          return (
            <ProjectDiv
              title={project.title}
              Github={project.Github}
              liveLink={project.liveLink}
              date={project.date}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PortfolioDiv;

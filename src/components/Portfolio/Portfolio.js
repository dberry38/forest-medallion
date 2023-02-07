import React from "react";
import ProjectDiv from "../Project/Project";
import { projectArray } from "./projectArray";
import { css } from '@emotion/css'

// TODO STYLING
const container = `

`
const listStyle = `

`



function PortfolioDiv(props) {
  return (
    <div className={css(container)}>
      <div className={css(listStyle)}>
        {projectArray.map((project) => {
          return (
            <ProjectDiv
              key={project.key}
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

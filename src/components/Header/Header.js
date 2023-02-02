import React from "react";
import "./header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      {props.children}
      {/* passing props.children inside the Header to pull in the Nav component */}
      {/* visit docs: https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891 */}
    </div>
  );
}

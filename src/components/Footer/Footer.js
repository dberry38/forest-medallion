import React from "react";
import "./footer.css";

export default function Header(props) {
  return (
    <div className="footer">
      <h1>{props.note}</h1>
    </div>
  );
}

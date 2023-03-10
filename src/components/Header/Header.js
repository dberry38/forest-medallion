import React from "react";
import { css } from '@emotion/css';

const headerStyle = `
top: 0;
left: 0;
width: 100%;
text-align: center;
background-color: #397045;
color: white;
font-size: 1.25rem;
position: sticky;
z-index: 1;
padding-top: 0.001rem;
line-height: 0.5;
`

const otherStyle = `
color: white;
font-size: 2.38rem;
`

export default function Header(props) {
  return (
    <div className={css(headerStyle)}>
      <h1 className={css(headerStyle, otherStyle)}>David Berry</h1>
      {props.children}
      {/* passing props.children inside the Header to pull in the Nav component */}
      {/* visit docs: https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891 */}
    </div>
  );
}

import React from "react";
import { css } from '@emotion/react';

const color = 'white';

const h1Style = `
padding: 32px;
background-color: hotpink;
font-size: 24px;
border-radius: 30px;
&:hover {
  color: ${color};
}
`

function AboutDiv(props) {
    return (
        <div>
            <h1 css={css(h1Style)}>About Me And My Coding Skills Or Lack Thereof</h1>
            <h2>Probably won't keep this second header</h2>
            <h3>Or this one</h3>
            <h4>But I'm on a roll with these, can't stop</h4>
            <h5>Okay here's a list of skills I've learned:</h5>
            <ul>
                <li>Using git functions in the terminal</li>
                <li>HTML, CSS, and Javascript</li>
                <li>Responsive Layouts</li>
                <li>API Fetch Requests</li>
                <li>React (MERN Stack)</li>
                <li>And More</li>
            </ul>
        </div>
    );
}

export default AboutDiv;
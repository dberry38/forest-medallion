import React from "react";
import { css } from '@emotion/css';


const h1Style = `
display: flex;
width: 50rem;
align-items: center;
justify-content: center;
padding: 32px;
background-color: #397045;
font-size: 24px;
border-radius: 30px;
color: white;
`

function AboutDiv(props) {
    return (
        <div>
            <h1 className={css(h1Style)}>About Me And My Journey to Switch Careers</h1>
            <p>Hello! </p>
        </div>
    );
}

export default AboutDiv;
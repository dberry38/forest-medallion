import React from "react";
import { css } from '@emotion/css';

const color = 'white';

const h1Style = `
padding: 32px;
background-color: hotpink;
font-size: 24px;
border-radius: 30px;
&:hover {
  color: ${color};
  background-color: #2a51ba;
}
`

function AboutDiv(props) {
    return (
        <div>
            <h1 className={css(h1Style)}>About Me And My Coding Skills Or Lack Thereof</h1>
        </div>
    );
}

export default AboutDiv;
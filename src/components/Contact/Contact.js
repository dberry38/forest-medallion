import React from 'react';
import { css } from '@emotion/css';

const contactStyle = `
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

function ContactDiv(props) {
    return (
        <div className={css(contactStyle)}>
            <h1>Find David Berry on:</h1>
            <a href="https://github.com/dberry38">Github</a>
            <br></br>
            <a href="https://www.linkedin.com/in/david-berry-122b5787/">LinkedIn</a>
            <br></br>
            <a href="https://stackoverflow.com/users/19490552/david-berry">Stack Overflow</a>
            <br></br>
            <a href="mailto:davidberry38@gmail.com">Electronic Mail</a>
        </div>
    );
}

export default ContactDiv;
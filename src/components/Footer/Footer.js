import React from "react";
import { css } from '@emotion/css';
import mtPic from '../../assets/Images/mountain_pic.jpg'

const h1Style = `
display: flex;
align-items: center;
justify-content: center;
font-size: 6px;
margin-top: 5rem;
background-image: url${mtPic};
`
const linkStyle = `
text-decoration: none;
`

export default function Header(props) {
  return (
    <div className={css(h1Style)}>
      <h1>Made by a guy who has a <a className={css(linkStyle)} href="https://github.com/dberry38" target="_blank" rel="noopener noreferrer">Github</a> and an <a className={css(linkStyle)} href="mailto:davidberry38@gmail.com">email</a>.</h1>
    </div>
  );
}

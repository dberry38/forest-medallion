import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer/Footer";
import { css } from '@emotion/css';

const mainStyle = `
margin: 0;
display: flex;
align-items: center;
justify-content: center;
color: white;
`

function App() {
  const [pages] = useState([
    {name: "About"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Header title="testing header">
        <Nav 
          pages = {pages}
          setCurrentPage = {setCurrentPage}
          currentPage = {currentPage}
        ></Nav>
      </Header>
      <main className={css(mainStyle)}>
        <Page currentPage = {currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

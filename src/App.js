import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer/Footer";

function App() {
  const [pages] = useState([
    {name: "About Me"},
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
      <main>
        <Page currentPage = {currentPage}></Page>
      </main>
      <Footer note="this is a footer" />
    </div>
  );
}

export default App;

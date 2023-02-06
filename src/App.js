import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer/Footer";

function App() {
  const [pages] = useState([
    {name: "About"},
    {name: "Portfolio"},
    {name: "Contact"},
    {name: "Resume"},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  // const [toggle, setToggle] = useState(false) ---- toggle button demo

  // var arr = [ ------------- array mapping demo
  //   {
  //     name: "peter",
  //     game: "FNSM",
  //   },
  //   {
  //     name: "reed",
  //     game: "stretchy man",
  //   },
  //   {
  //     name: "johnny",
  //     game: "flameboy",
  //   },
  // ]

  return (
    <div>
      <Header title="testing header">
        <Nav 
          pages = {pages}
          setCurrentPage = {setCurrentPage}
          currentPage = {currentPage}
        ></Nav>
      </Header>

      {/* <button onClick={()=> {setToggle(!toggle)}} style={toggle ? {backgroundColor: "blue"} : {backgroundColor: "red"}}>{toggle ? "log-out" : "log in"}</button> */}
      {/* toggle demo */}

{/* {arr.map(element => {
  return ( <div>
    <h1>{element.name}</h1>
    <h2>{element.game}</h2>
    </div>
  )
})} */}
{/* map rendering demo */}

      <main>
        <Page currentPage = {currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

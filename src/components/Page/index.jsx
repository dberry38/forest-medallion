import React from 'react';
import PageContents from "../PageContents";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";

const Page = ({currentPage}) => {
    const renderPage = () => {
        switch (currentPage.name) {
            case "About Me":
                return <About />
            case "Portfolio":
                return <Portfolio />
            case "Contact":
                return <Contact />
            case "Resume":
                return <Resume />
            default:
                return <About />
        }
    };

  return (
    <section>
        <PageContents>{renderPage()}</PageContents>
    </section>
  )
}

export default Page

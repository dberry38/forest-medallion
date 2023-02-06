import React, { useEffect } from 'react'
import { css } from '@emotion/css';

const listStyle = `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding: 0.5rem 18rem;
cursor: pointer;
`

const Nav = (props) => {
        const {
            pages,
            setCurrentPage,
            currentPage,
        } = props;

        useEffect(() => {
            document.title = currentPage.name;
        }, [currentPage])
    console.log(pages)
      return (
        <nav>
            <div className={css(listStyle)}>
                {pages.map((Page) => (
                    <p className={`${currentPage.name === Page.name && 'navActive'}`} key={Page.name}>
                        <span onClick={() => setCurrentPage(Page)}>
                            {Page.name}
                        </span>
                    </p> 
                ))}
            </div>
        </nav>
      )
    
}

export default Nav

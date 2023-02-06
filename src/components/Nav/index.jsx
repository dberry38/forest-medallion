import React, { useEffect } from 'react'
import { css } from '@emotion/css';

const listStyle = `
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
padding: 0.5rem 10rem;
cursor: pointer;
`

const itemStyle = `
margin: 0 0.75rem;
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
                        <span className={css(itemStyle)} onClick={() => setCurrentPage(Page)}>
                            {Page.name}
                        </span>
                    </p> 
                ))}
            </div>
        </nav>
      )
    
}

export default Nav

import React, { useEffect } from 'react'
import { css } from '@emotion/react';

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
            <h2>heklo</h2>
            <ul>
                {pages.map((Page) => (
                    <li className={`${currentPage.name === Page.name && 'navActive'}`} key={Page.name}>
                        <span onClick={() => setCurrentPage(Page)}>
                            {Page.name}
                        </span>
                    </li> 
                ))}
            </ul>
        </nav>
      )
    
}

export default Nav

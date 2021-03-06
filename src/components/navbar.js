import React from 'react';
import { graphql } from 'gatsby';
import './style.css'

const Navbar = ({data}) => {
    return (
        <div class="flex navbar">
            <a href="#" class="character-menu-button">Characters</a>
            <div class="character-menu">
                <ul>
                {data.map(({ node }) => {
                    return (
                        <li key={node.name}>
                            <p>{node.name}</p>
                        </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
import React from 'react';
import { graphql } from 'gatsby';

const Navbar = ({data}) => {
    return (
        <div>
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
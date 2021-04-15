import React from 'react';
import { graphql } from 'gatsby';

const Navbar = ({data}) => {
    return (
        <div>
            <a href="#" class="character-menu-button">Characters</a>
            <div class="character-menu">
                <ul>
                    {data.character.edges.node.name.forEach(character => {
                        return <li>{character}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar

export const pageQuery = graphql`
character: allContentfullCharacter {
    edges {
        node {
            name
        }
    }
}
`
import React from 'react';
import { graphql } from 'gatsby';

const Navbar = ({data}) => {
    return (
        <div>
            <a href="#">Characters</a>
            <div>
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
    query()=> {
        character: allContentfullCharacter {
            edges {
                node {
                    name
                }
            }
        }
    }
`
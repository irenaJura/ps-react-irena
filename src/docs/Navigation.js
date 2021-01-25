import React from 'react';

const Navigation = ({components}) => {
    return (
        <ul className="navigation">
            {
                components.map(name => {
                    return (
                        <li key={name}>
                            <a href={`#${name}`}>{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navigation;
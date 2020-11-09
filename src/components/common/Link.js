import React from 'react';
import './Link.css'

const Link = (props) => {
    return (
        <a className="link" href={props.url} target="_blank">
            <img src={props.img} />
        </a>
    );
};

export default Link;
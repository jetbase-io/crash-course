import React from 'react';
import './Link.css'

const Link = ({ url, img }) => {
    return (
        <a className="link" href={url} target="_blank">
            <img src={img} />
        </a>
    );
};

export default Link;
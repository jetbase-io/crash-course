import React from 'react';
import './SourceLinks.css'

import Link from "./Link";

const links = [
    {url: 'https://www.facebook.com', img: '/images/facebook.png'},
    {url: 'https://www.twitter.com', img: '/images/twitter.png'},
    {url: 'https://www.google.com', img: '/images/google-plus.png'},
    {url: 'https://www.linkedin.com', img: '/images/linkedin.png'},
    {url: 'https://www.github.com', img: '/images/github.png'},
    {url: 'https://www.skype.com', img: '/images/skype.png'}

];

const SourceLinks = () => {
    return (
        <div className="source-links">
            {links.map((link, i) => <Link key={i} url={link.url} img={link.img} />)}
        </div>
    );
};

export default SourceLinks;
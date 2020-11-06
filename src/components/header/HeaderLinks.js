import React from 'react';
import './HeaderLinks.css'

import SourceLink from "../common/SourceLink";

class HeaderLinks extends React.Component {
    constructor(props) {
        super(props);

        this.links = [
            {url: 'https://www.facebook.com', img: '/images/facebook.png'},
            {url: 'https://www.twitter.com', img: '/images/twitter.png'},
            {url: 'https://www.google.com', img: '/images/google-plus.png'},
            {url: 'https://www.linkedin.com', img: '/images/linkedin.png'},
            {url: 'https://www.github.com', img: '/images/github.png'},
            {url: 'https://www.skype.com', img: '/images/skype.png'}

        ]
    }

    render() {
        return (
            <div className="header-links">
                {this.links.map((link, i) => <SourceLink key={i} url={link.url} img={link.img} />)}
            </div>
        );
    }
}

export default HeaderLinks;
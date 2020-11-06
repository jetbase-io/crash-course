import React from 'react';
import './Link.css'

class Link extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="link" href={this.props.url} target="_blank">
                <img src={this.props.img} />
            </a>
        );
    }
}

export default Link;
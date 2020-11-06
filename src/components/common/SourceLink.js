import React from 'react';
import './SourceLink.css'

class SourceLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="source-link" href={this.props.url} target="_blank">
                <img src={this.props.img} />
            </a>
        );
    }
}

export default SourceLink;
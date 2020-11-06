import React from 'react';
import './Label.css'

class Label extends React.Component {
    constructor(props) {
        super(props);
        this.type = `label--${this.props.type}`
    }

    render() {
        return (
            <span className={'label ' + this.type}>{this.props.text}</span>
        );
    }
}

export default Label;
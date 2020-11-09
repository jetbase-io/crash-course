import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.value = this.props.value || 0;
        this.max = this.props.max || 100;
        this.classes = Array.isArray(this.props.classes) ? this.props.classes.join(' ') : this.props.classes
    }

    render() {
        return (
            <progress value={this.value} max={this.max} className={this.classes} />
        );
    }
}

export default ProgressBar;
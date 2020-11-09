import React from 'react';
import './Skill.css'

import ProgressBar from "./ProgressBar";

class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.title = this.props.title;
        this.value = this.props.value || 0;
    }

    render() {
        return (
            <div className="skill">
                <div className="skill__text">
                    <span>{this.title}</span>
                    <span>{this.value}%</span>
                </div>
                <ProgressBar value={this.value} max="100" classes="skill__bar"/>
            </div>
        );
    }
}

export default Skill;
import React from 'react';
import './Skill.css'

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
                <progress value={this.value} max="100" className="skill__bar"></progress>
            </div>
        );
    }
}

export default Skill;
import React from 'react';
import './Skill.css'

import ProgressBar from "./ProgressBar";

const Skill = (props) => {
    const value = props.value || 0;

    return (
        <div className="skill">
            <div className="skill__text">
                <span>{props.title}</span>
                <span>{value}%</span>
            </div>
            <ProgressBar value={value} className="skill__bar"/>
        </div>
    );
};

export default Skill;
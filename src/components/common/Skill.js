import React from 'react';
import './Skill.css'

import ProgressBar from "./ProgressBar";

const Skill = ({ value=0, title }) => {
    return (
        <div className="skill">
            <div className="skill__text">
                <span>{title}</span>
                <span>{value}%</span>
            </div>
            <ProgressBar value={value} className="skill__bar"/>
        </div>
    );
};

export default Skill;
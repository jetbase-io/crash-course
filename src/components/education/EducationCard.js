import React from 'react';
import './EducationCard.css'

import Label from "../common/Label";

const EducationCard = ({ title, text, label }) => {
    return (
        <div className="education__card">
            <h1 className="education__card__title">{title}</h1>
            <h4 className="education__card__text">{text}</h4>
            <Label text={label} type='up'/>
        </div>
    );
};

export default EducationCard;
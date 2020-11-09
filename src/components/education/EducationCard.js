import React from 'react';
import './EducationCard.css'

import Label from "../common/Label";

const EducationCard = (props) => {
    return (
        <div className="education__card">
            <h1 className="education__card__title">{props.title}</h1>
            <h4 className="education__card__text">{props.text}</h4>
            <Label text={props.label} type='up'/>
        </div>
    );
};

export default EducationCard;
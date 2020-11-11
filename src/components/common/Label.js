import React from 'react';
import './Label.css'

const Label = (props) =>{
    return (
        <span className={`label label--${props.type}`}>{props.text}</span>
    );
};

export default Label;
import React from 'react';
import './Label.css'

const Label = ({ type, text }) =>{
    return (
        <span className={`label label--${type}`}>{text}</span>
    );
};

export default Label;
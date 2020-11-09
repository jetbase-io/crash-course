import React from 'react';
import './EducationCard.css'

import Label from "../common/Label";

class EducationCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="education__card">
                <h1 className="education__card__title">{this.props.title}</h1>
                <h4 className="education__card__text">{this.props.text}</h4>
                <Label text={this.props.label} type='up'/>
            </div>
        );
    }
}

export default EducationCard;
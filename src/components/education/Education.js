import React from 'react';
import './Education.css'

import EducationCard from "./EducationCard";
import {getEducation} from "../../actions/requestActions";

class Education extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            education: []
        }
    }

    async componentDidMount() {
        const education = await getEducation({});

        this.setState({
            education: education?.data || []
        })
    }

    render() {
        const { education } = this.state;

        return (
            <>
                <h1 className="section-title">Education</h1>

                <section className="education">
                    <div className="education__center-line" />

                    <div className="education-cards">
                        {education.map(card => <EducationCard title={card.title} text={card.text} label={card.label}/>)}
                    </div>
                </section>
            </>
        )
    }
}

export default Education;
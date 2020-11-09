import React from 'react';
import './Education.css'

import EducationCard from "./EducationCard";

const cards = [
    {title: 'BS in Computer Science', text: 'University of Awesomeness', label: '2006-2010'},
    {title: 'MS in Computer Science', text: 'University of Awesomeness', label: '2010-2011'},
    {title: 'Certification in Machine Learning', text: 'Institute of Creativity', label: '2011-2012'},
    {title: 'Certification in Data Analysis', text: 'Institute of Coolness', label: '2012-2013'},
    {title: 'Certification in Cyber Security', text: 'Institute of Awesomeness', label: '2013-2014'},
    {title: 'Certification in Big Data', text: 'Institute of Coolness', label: '2014-2015'}
];

const Education = () => {
    return (
        <>
            <h1 className="section-title">Education</h1>

            <section className="education">
                <div className="education__center-line" />

                <div className="education-cards">
                    {cards.map(card => <EducationCard title={card.title} text={card.text} label={card.label}/>)}
                </div>
            </section>
        </>
    );
};

export default Education;
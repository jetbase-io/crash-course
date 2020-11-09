import React from 'react';
import './Education.css'

class Education extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <h1 className="section-title">Education</h1>

                <section className="education">
                    <div className="education__center-line" />

                    <div className="education-cards">

                    </div>
                </section>
            </>
        );
    }
}

export default Education;
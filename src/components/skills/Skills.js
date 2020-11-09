import React from 'react';
import './Skills.css'

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +
            "\n" +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    render() {
        return (
            <>
                <h1 className="section-title">Skills</h1>

                <section className="skills">
                    <div className="skills__description">
                        {this.description}
                    </div>

                    <div className="skills__content">

                    </div>
                </section>
            </>
        );
    }
}

export default Skills;
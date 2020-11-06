import React from 'react';
import './HeaderTitle.css'

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-title">
                <h1>Dmitry Karavaev</h1>
                <h2>Web Developer</h2>
            </div>
        );
    }
}

export default HeaderTitle;
import React from 'react';
import './HeaderTitle.css'

const HeaderTitle = (props) => {
    return (
        <div className="header-title">
            <h1>{props.fullName}</h1>
            <h2>{props.grade}</h2>
        </div>
    );
};

export default HeaderTitle;
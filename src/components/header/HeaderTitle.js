import React from 'react';
import './HeaderTitle.css'

const HeaderTitle = ({ fullName, grade }) => {
    return (
        <div className="header-title">
            <h1>{fullName}</h1>
            <h2>{grade}</h2>
        </div>
    );
};

export default HeaderTitle;
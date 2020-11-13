import React from 'react';

const ProfileCardTitle = ({ fullName, grade }) => {
    return (
        <div className="profile-card__title">
            <h1><span>I'm</span> <span>{fullName}</span></h1>
            <h3>{grade}</h3>
        </div>
    );
};

export default ProfileCardTitle;
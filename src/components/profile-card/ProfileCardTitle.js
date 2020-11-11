import React from 'react';

const ProfileCardTitle = (props) => {
    return (
        <div className="profile-card__title">
            <h1><span>I'm</span> <span>{props.fullName}</span></h1>
            <h3>{props.grade}</h3>
        </div>
    );
};

export default ProfileCardTitle;
import React from 'react';


class ProfileCardTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-card__title">
                <h1><span>I'm</span> <span>Dmitry Karavaev</span></h1>
                <h3>Full-stack web developer</h3>
            </div>
        );
    }
}

export default ProfileCardTitle;
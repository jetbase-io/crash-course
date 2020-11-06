import React from 'react';
import './ProfileCard.css'

import Label from "../common/Label";

class ProfileCard extends React.Component {
    render() {
        return (
            <section className="profile-card">
                <img className="profile-card__img" src="/images/profile.jpg" />

                <div className="profile-card__content">
                    <Label text='Hello & Welcome' type='down'/>

                </div>
            </section>
        );
    }
}

export default ProfileCard;
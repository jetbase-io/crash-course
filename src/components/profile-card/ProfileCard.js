import React from 'react';
import './ProfileCard.css'


class ProfileCard extends React.Component {
    render() {
        return (
            <section className="profile-card">
                <img className="profile-card__img" src="/images/profile.jpg" />

                <div className="profile-card__content">

                </div>
            </section>
        );
    }
}

export default ProfileCard;
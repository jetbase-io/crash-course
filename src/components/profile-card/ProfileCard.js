import React from 'react';
import './ProfileCard.css'

import Label from "../common/Label";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardList from "./ProfileCardList";
import SourceLinks from "../common/SourceLinks";


const ProfileCard = (props) => {
    return (
        <section className="profile-card">
            <img className="profile-card__img" src="/images/profile.jpg" />

            <div className="profile-card__content">
                <Label text='Hello & Welcome' type='down'/>
                <ProfileCardTitle fullName={props?.user?.fullName} grade={props?.user?.grade} />

                <div className="delimiter" />

                <ProfileCardList fields={props?.user?.profileInfo}/>

                <div className="profile-card__footer">
                    <SourceLinks />
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
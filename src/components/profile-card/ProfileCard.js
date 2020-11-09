import React from 'react';
import './ProfileCard.css'

import Label from "../common/Label";
import ProfileCardTitle from "./ProfileCardTitle";
import ProfileCardList from "./ProfileCardList";
import SourceLinks from "../common/SourceLinks";

const fields = [
    {name: 'Age', value: '22'},
    {name: 'Address', value: 'Some Street, Novosibirsk'},
    {name: 'Email', value: 'voobsheeee@mail.ru'},
    {name: 'Phone', value: '8 800 555 3535'},
    {name: 'Website', value: 'https://github.com'}
];

const ProfileCard = () => {
    return (
        <section className="profile-card">
            <img className="profile-card__img" src="/images/profile.jpg" />

            <div className="profile-card__content">
                <Label text='Hello & Welcome' type='down'/>
                <ProfileCardTitle fullName="Dmitry Karavaev" grade="Full-stack web developer" />

                <div className="delimiter"></div>

                <ProfileCardList fields={fields}/>

                <div className="profile-card__footer">
                    <SourceLinks />
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
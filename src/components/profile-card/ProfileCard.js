import React from 'react';
import './ProfileCard.css'

import Label from "../common/Label";

import ProfileCardList from "./ProfileCardList";

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);

        this.fields = [
            {name: 'Age', value: '22'},
            {name: 'Address', value: 'Some Street, Novosibirsk'},
            {name: 'Email', value: 'voobsheeee@mail.ru'},
            {name: 'Phone', value: '8 800 555 3535'},
            {name: 'Website', value: 'https://github.com'}
        ]
    }

    render() {
        return (
            <section className="profile-card">
                <img className="profile-card__img" src="/images/profile.jpg" />

                <div className="profile-card__content">
                    <Label text='Hello & Welcome' type='down'/>

                    <div className="delimiter"></div>

                    <ProfileCardList fields={this.fields}/>
                </div>
            </section>
        );
    }
}

export default ProfileCard;
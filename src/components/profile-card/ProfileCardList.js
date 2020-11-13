import React from 'react';

const ProfileCardList = (props) => {
    return (
        <dl className="profile-card__list">
            {props.fields?.map((field, i) => {
                return [
                    <dt key={field.name + '1'}>{field.name}</dt>,
                    <dd key={field.name + '2'}>{field.value}</dd>
                ]
            })}
        </dl>
    );
};

export default ProfileCardList;
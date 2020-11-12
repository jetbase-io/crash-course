import React from 'react';

const ProfileCardList = ({ fields }) => {
    return (
        <dl className="profile-card__list">
            {fields?.map(field => {
                return [
                    <dt key={field.name + '1'}>{field.name}</dt>,
                    <dd key={field.name + '2'}>{field.value}</dd>
                ]
            })}
        </dl>
    );
};

export default ProfileCardList;
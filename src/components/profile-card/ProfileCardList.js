import React from 'react';

const ProfileCardList = (props) => {
    return (
        <dl className="profile-card__list">
            {props.fields.map(field => {
                return [<dt>{field.name}</dt>, <dd>{field.value}</dd>]
            })}
        </dl>
    );
};

export default ProfileCardList;
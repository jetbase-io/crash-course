import React from 'react';


class ProfileCardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <dl className="profile-card__list">
                {this.props.fields.map(field => {
                    return [<dt>{field.name}</dt>, <dd>{field.value}</dd>]
                })}
            </dl>
        );
    }
}

export default ProfileCardList;
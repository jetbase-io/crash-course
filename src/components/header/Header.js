import React from 'react';
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                {this.props.children}
            </header>
        );
    }
}

export default Header;
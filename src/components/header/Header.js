import React from 'react';
import './Header.css'

import HeaderTitle from "./HeaderTitle";
import HeaderLinks from "./HeaderLinks";

class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderTitle />
                <HeaderLinks />
            </header>
        );
    }
}

export default Header;
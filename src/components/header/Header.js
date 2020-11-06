import React from 'react';
import './Header.css'

import HeaderTitle from "./HeaderTitle";

class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderTitle />
            </header>
        );
    }
}

export default Header;
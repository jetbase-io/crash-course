import React from 'react';
import './Header.css'

import SourceLinks from "../common/SourceLinks";

import HeaderTitle from "./HeaderTitle";


class Header extends React.Component {
    render() {
        return (
            <header>
                <HeaderTitle />
                <SourceLinks />
            </header>
        );
    }
}

export default Header;
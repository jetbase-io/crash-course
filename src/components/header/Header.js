import React from 'react';
import './Header.css'

import SourceLinks from "../common/SourceLinks";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
    return (
        <header>
            <HeaderTitle fullName="Dmitry Karavaev" grade="Full-stack web developer" />
            <SourceLinks />
        </header>
    );
};

export default Header;
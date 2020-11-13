import React from 'react';
import './Header.css'

import SourceLinks from "../common/SourceLinks";
import HeaderTitle from "./HeaderTitle";

const Header = (props) => {
    return (
        <header>
            <HeaderTitle fullName={props?.user?.fullName} grade={props?.user?.grade} />
            <SourceLinks />
        </header>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/usersSlice";

import SourceLinks from "../common/SourceLinks";
import HeaderTitle from "./HeaderTitle";

const Header = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));

    return (
        <header>
            <HeaderTitle fullName={user?.fullName} grade={user?.grade} />
            <SourceLinks />
        </header>
    );
};

export default Header;
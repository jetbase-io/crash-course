import React from 'react';

import Container from './components/common/Container';

import Header from "./components/header/Header";

import ProfileCard from "./components/profile-card/ProfileCard";


function App() {
    return (
        <>
            <div className="header-string"/>

            <Container>
                <Header />
                <ProfileCard />
            </Container>
        </>
    );
}

export default App;

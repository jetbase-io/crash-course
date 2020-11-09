import React from 'react';

import Container from './components/common/Container';

import Header from "./components/header/Header";

import ProfileCard from "./components/profile-card/ProfileCard";

import Skills from "./components/skills/Skills";


function App() {
    return (
        <>
            <div className="header-string"/>

            <Container>
                <Header />
                <ProfileCard />
                <Skills />
            </Container>
        </>
    );
}

export default App;

import React from 'react';

// Common
import Container from './components/common/Container';
import HeaderString from "./components/common/HeaderString";

import Header from "./components/header/Header";

import ProfileCard from "./components/profile-card/ProfileCard";


function App() {
    return (
        <>
            <HeaderString />

            <Container>
                <Header />
                <ProfileCard />
            </Container>
        </>
    );
}

export default App;

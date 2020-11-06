import React from 'react';

// Common
import Container from './components/common/Container';
import HeaderString from "./components/common/HeaderString";

// Header
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <HeaderString />
            
            <Container>
                <Header>

                </Header>
            </Container>
        </>
    );
}

export default App;

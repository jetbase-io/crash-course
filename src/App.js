import React from 'react';

import Container from './components/common/Container';
import Header from "./components/header/Header";
import ProfileCard from "./components/profile-card/ProfileCard";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";

import { getUsers } from './actions/requestActions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
    };

    async componentDidMount() {
        const users = await getUsers({fullName: 'Dmitry Karavaev'});

        this.setState({
            user: users?.data?.[0]
        })
    }

    render() {
        const { user } = this.state;

        return (
            <>
                <div className="header-string"/>

                <Container>
                    <Header user={user}/>
                    <ProfileCard user={user}/>
                    <Skills />
                    <Education />
                </Container>
            </>
        )
    }
}

export default App;

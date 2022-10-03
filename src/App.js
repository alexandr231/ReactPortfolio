import React, { useRef } from 'react';
import {
    ChakraProvider,
    VStack,
    theme,
    Divider,
} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Profile from './Components/Profile';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts';

function App() {

    const profile = React.createRef();
    const contacts = React.createRef();
    const projects= React.createRef();

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <ChakraProvider theme={theme} w="100%" h="100%">
            <VStack p={5} w="100%" spacing={6}>
                <Header scrollToSection={scrollToSection} profile={profile} contacts={contacts} projects={projects}></Header>
                <Divider ref={profile}></Divider>
                <Profile></Profile>
                <Divider ref={projects}></Divider>
                <Projects ></Projects>
                <Divider ref={contacts}></Divider>
                <Contacts></Contacts>
            </VStack>
        </ChakraProvider>
    );
}

export default App;

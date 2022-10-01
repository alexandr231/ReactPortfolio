import React from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Divider,
} from '@chakra-ui/react';
import Header from './Components/Header/Header';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <VStack p={5} w="100%" spacing={6}>
                <Header></Header>
                <Divider></Divider>
                <Profile></Profile>
                <Divider></Divider>
                <Projects></Projects>
                <Divider></Divider>
                <Contacts></Contacts>
            </VStack>
        </ChakraProvider>
    );
}

export default App;

import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

function Header(props) {


    return (

        <Flex w="100%" justifyContent='space-between' flexDirection="row" >
            <Flex justifyContent='flex-start' gap='20%' flexGrow='2' ml='10%'>
                <Button onClick={() => props.scrollToSection(props.profile)}  fontSize='xl' variant='ghost'>Home</Button>
                <Button onClick={() => props.scrollToSection(props.projects)} fontSize='xl' variant='ghost'>Projects</Button>
                <Button onClick={() => props.scrollToSection(props.contacts)} fontSize='xl' variant='ghost'>Contacts</Button>
            </Flex>
            <Flex flexDirection='column' flexGrow='1' ml="10%">
                <ColorModeSwitcher alignSelf="flex-end" />
            </Flex>
        </Flex>

    )
}

export default Header
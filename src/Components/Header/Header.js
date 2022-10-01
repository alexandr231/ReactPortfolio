import { Box, Button, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

function Header() {
    return (
        
        <Flex w="100%" justifyContent='space-between' flexDirection="row" >
            <Flex justifyContent='flex-start' gap='20%' flexGrow='2' ml='10%'>
                <Button fontSize='xl' variant='ghost'>Home</Button>
                <Button fontSize='xl' variant='ghost'>Projects</Button>
                <Button fontSize='xl' variant='ghost'>Contacts</Button>
            </Flex>
            <Flex flexDirection='column' flexGrow='1' ml="10%">
                <ColorModeSwitcher alignSelf="flex-end"/>
            </Flex>
        </Flex>

    )
}

export default Header
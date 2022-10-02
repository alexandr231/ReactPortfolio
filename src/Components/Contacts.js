import { Flex, Icon, Link, Box, useMediaQuery, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTelegram, FaVk, FaGithub, FaDiscord } from 'react-icons/fa'

function Contacts() {

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Flex flexDirection="column" alignItems="flex-start" w="100%" mb="15vh">
            <Box fontSize="2xl" pl={20} mb="10">
                Contacts
            </Box>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} alignItems="center" gap="20vh" w="100%" justifyContent="center" alignSelf="center">
                <Link href='https://t.me/alexandr0vsol0' isExternal="true">
                    <Icon as={FaTelegram} boxSize="50">
                    </Icon>
                </Link>
                <Link href='https://vk.com/alexandr0vsol0' isExternal="true">
                    <Icon as={FaVk} boxSize="50">
                    </Icon>
                </Link>
                <Link href='https://github.com/alexandr231' isExternal="true">
                    <Icon as={FaGithub} boxSize="50">
                    </Icon>
                </Link>
                <Link href='https://discordapp.com/users/238179084167938050/' isExternal="true">
                    <Icon as={FaDiscord} boxSize="50">
                    </Icon>
                </Link>
            </Flex>
            <Box fontSize="3xl" p={20} mb="10" alignSelf="center">
                <Text>You can also email me at:</Text>
                <Text bgGradient="linear(to-r, purple.400, purple.600, purple.800)" bgClip="text" >alexandr0vsol0@gmail.com</Text>
            </Box>
        </Flex>
    )
}

export default Contacts
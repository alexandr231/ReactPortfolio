import { Flex, Icon, Link, Box } from '@chakra-ui/react'
import React from 'react'
import { FaTelegram, FaVk, FaGithub, FaDiscord } from 'react-icons/fa'

function Contacts() {
    return (
        <Flex flexDirection="column" alignItems="flex-start" w="100%">
            <Box fontSize="2xl" pl={20} mb="5">
                Contacts
            </Box>
            <Flex flexDirection="row" justifyContent="center" gap="20vh" w="100%">
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
        </Flex>
    )
}

export default Contacts
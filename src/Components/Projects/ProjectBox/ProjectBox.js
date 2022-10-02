import React from 'react'
import { Box, Flex, Icon, Link, Stack, useColorMode, useMediaQuery, Text } from '@chakra-ui/react'

function ProjectBox(props) {

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Link href={props.href} isExternal="true" _hover={{ textDecoration: "none", }}>
            <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                bg="blue.400" h="40vh" w="40vh" justify="flex-end" _hover={{ bg: "purple.400", }}>
                <Icon color="black" as={props.icon} boxSize="14" ml="3"></Icon>
                <Text bgGradient="linear(to-r, black, black, black)" bgClip="text" fontSize="large" fontWeight="semibold" mx="2" mb="2">
                    {props.name}
                </Text>
            </Flex>
        </Link>
    )
}

export default ProjectBox
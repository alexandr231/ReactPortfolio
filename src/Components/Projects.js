import { Box, Flex, Icon, Link, Stack, useColorMode, useMediaQuery, Text } from '@chakra-ui/react'
import React from 'react'
import { DiWebplatform, DiPython, DiReact } from 'react-icons/di'
function Projects() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Flex flexDirection="column" alignItems="flex-start" w="100%">
            <Box fontSize="2xl" pl={20} mb="5">
                Projects
            </Box>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} justifyContent="space-around " w="100%" gap="5vh">
                <Link href='https://github.com/alexandr231/Algorithm' isExternal="true" _hover={{ textDecoration: "none", }}>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.400" h="40vh" w="40vh" justify="flex-end" _hover={{ bg: "purple.400", }}>
                        <Icon color="black" as={DiPython} boxSize="14" ml="3"></Icon>
                        <Text bgGradient="linear(to-r, black, black, black)" bgClip="text" fontSize="large" fontWeight="semibold" mx="2" mb="2">
                            Structures and algorithms
                        </Text>
                    </Flex>
                </Link>
                <Link href='https://github.com/alexandr231/webPage' isExternal="true" _hover={{ textDecoration: "none", }}>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.400" h="40vh" w="40vh" justify="flex-end" _hover={{ bg: "purple.400", }}>
                        <Icon color="black" as={DiWebplatform} boxSize="14" ml="3"></Icon>
                        <Text bgGradient="linear(to-r, black, black, black)" bgClip="text" fontSize="large" fontWeight="semibold" mx="2" mb="2">
                            First simple web site
                        </Text>
                    </Flex>
                </Link>
                <Link href='https://github.com/alexandr231/learnReact' isExternal="true" _hover={{ textDecoration: "none", }}>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="blue.400" h="40vh" w="40vh" justify="flex-end" _hover={{ bg: "purple.400", }}>
                        <Icon color="black" as={DiReact} boxSize="14" ml="3"></Icon>
                        <Text bgGradient="linear(to-r, black, black, black)" bgClip="text"
                            fontSize="large" fontWeight="semibold" mx="2" mb="2">
                            React learning project
                        </Text>
                    </Flex>
                </Link>
            </Flex>
        </Flex>
    )
}

export default Projects
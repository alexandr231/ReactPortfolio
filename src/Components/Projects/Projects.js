import { Box, Flex, Icon, Link, Stack, useColorMode, useMediaQuery, Text } from '@chakra-ui/react'
import React from 'react'
import { DiWebplatform, DiPython, DiReact } from 'react-icons/di'
import ProjectBox from './ProjectBox/ProjectBox';
function Projects() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Flex flexDirection="column" alignItems="flex-start" w="100%">
            <Box fontSize="2xl" pl={20} mb="5">
                Projects
            </Box>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} justifyContent="space-around " w="100%" gap="5vh" wrap="wrap">
                <ProjectBox href='https://github.com/alexandr231/Algorithm' icon={DiPython} name="Structures and algorithms"/>
                <ProjectBox href='https://github.com/alexandr231/webPage' icon={DiWebplatform} name="First simple web site"/>
                <ProjectBox href='https://github.com/alexandr231/learnReact' icon={DiReact} name="React learning project"/>
            </Flex>
        </Flex>
    )
}

export default Projects
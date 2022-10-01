import { Box, Circle, Flex, Stack, useMediaQuery, Text, useColorMode, Button, Image } from '@chakra-ui/react'
import React from 'react'

function Profile() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <Stack>
            <Circle position="absolute" bg="blue.800" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end"></Circle>
            <Flex flexDirection={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start" >
                <Box mt={isNotSmallerScreen ? "0" : 16} alignItems="flex-start">
                    <Text
                        fontSize="3xl"
                        fontWeight="semibold">
                        Hi, I am
                    </Text>
                    <Text
                        fontSize="5xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
                        Alexandr Raznomazov
                    </Text>
                    <Text
                        bgGradient={isDark ? "linear(to-r, gray.100, gray.100, gray.100)" : "linear(to-r, gray.700, gray.700, gray.700)"}
                        bgClip="text">
                        a student of MTUCI and 20 years old frontend beginner
                    </Text>
                    <Text
                        bgGradient={isDark ? "linear(to-r, gray.100, gray.100, gray.100)" : "linear(to-r, gray.700, gray.700, gray.700)"}
                        bgClip="text">
                        this site represents my projects and achievments
                    </Text>
                    <Button mt={8} colorScheme="blue">
                        Contact me
                    </Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://avatars.githubusercontent.com/u/79802233?v=4'
                    zIndex={1} />
            </Flex>
        </Stack>
    )
}

export default Profile
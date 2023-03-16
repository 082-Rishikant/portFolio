import { Image, Center, Flex, Stack, Text, Box , Divider} from '@chakra-ui/react';
import React from 'react'
import '../App.css'

function About() {
  return (
    <Flex className='bgcolor' direction="row" p={5} fontFamily="Montserrat" minH='calc(100vh)' alignItems="center">
      <Center w="49%">
        <Image src="images/20221220_200948.jpg" alt='Rishi pic' boxSize="500px" borderRadius="full" objectFit='cover'/>
      </Center>

      {/* <Divider orientation='vertical' color='white'/> */}

      <Box w="49%" alignItems="center">
        <Stack spacing={5} py="100px" px={5}>
          <Text fontSize='4xl' className='dark-purple'>About</Text>
          <Divider orientation='horizontal' color="whiteAlpha.400"/>
          <Text fontSize='2xl' color="whiteAlpha.600">I'm Rishikant patel, a MERN developer bringing you programming and design from the future. I am experienced in developing web and desktop applications including full front end design. This includes brand identity, graphics and illustrations.</Text>
        </Stack>
      </Box>
    </Flex>
  )
}

export default About;
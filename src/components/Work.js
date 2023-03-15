import { Box, Center, Divider, Flex,Text } from '@chakra-ui/react';
import React from 'react'
import '../App.css'

function Work() {
  return (
    <Box w="100%" bg="white" fontFamily="Montserrat" h='calc(100vh)'>
      <Center fontSize="4xl" fontWeight="bold" className='dark-purple' pt="80px" pb="0px">Work</Center>
      <Center fontSize="55px" fontWeight="bold" color="black">Explore the Projects</Center>
      {/* <Divider orientation='horizontal' bg='gray' height="1.2px"></Divider> */}
      <Flex direction="column" color="black" px="180px" mt="40px">
        <Box>
          <Text fontSize="20px" fontWeight="semibold">Date</Text>
        </Box>
        <Box mb="70px">
          <Text fontSize="55px" fontWeight="bold">Project Name</Text>
        </Box>
        <Box mb="40px">
          <Text fontSize="20px" fontWeight="semibold" color="gray">Descripttion</Text>
        </Box>
        <Box mb="15px" >web app | Tech stack</Box>
        <Box><Divider orientation='horizontal' bg='gray' height="0.5px"/></Box>
      </Flex>
    </Box>
  )
}

export default Work;
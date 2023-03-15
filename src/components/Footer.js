import { Box, Icon, Grid, Text, Flex } from '@chakra-ui/react';
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import '../App.css'

function Footer() {
  return (
    <Box fontFamily="Montserrat" bg='blackAlpha.900'>
      <Box px="95px"><hr className='hrf' /></Box>
      <Grid pb="60px" mt="40px" mx="95px" templateColumns='repeat(3, 1fr)'>
        <Flex alignItems="center">
          <Text fontWeight="semibold" color="white">Made with love By Rishikant Patel</Text>
        </Flex>
        <Flex justifyContent="center">
          <Box p={3}>
            <Icon w="31px" h="31px" as={BsGithub}/>
          </Box>
          <Box p={3}>
            <Icon w="31px" h="31px" as={GrLinkedinOption} />
          </Box>
        </Flex>
        <Flex alignItems="center" justifyContent="end">
        <Text fontWeight="semibold" color="white">Contact</Text>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Footer;
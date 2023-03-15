import { Box, Flex, Stack, Icon, FormControl, FormLabel, Input, Button, Textarea, InputGroup, InputLeftElement, } from '@chakra-ui/react';
import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'



function Contact() {
  return (
    <Flex direction="row" fontFamily="Montserrat" bg='blackAlpha.900' h='calc(100vh)'>

      <Stack width="50%" px="100px" justifyContent="center">
        <Box className='dark-purple' fontSize="3xl" fontWeight="medium">CONTACT</Box>
        <Box fontSize="5xl" fontWeight="bold" pb="40px">Got a problem to solve?</Box>
        <Box fontSize="2xl" fontWeight="semibold" color="gray" pb="60px">Get your space suit ready and tell me your ideas to develop your dream application.</Box>
        <Flex direction="row" alignItems="center">
          <Icon as={FiMail} w="30px" h="30px" pe={2} />
          <Box fontSize="20px" fontWeight="semibold">rishikant9650@gmail.com</Box>
        </Flex>
      </Stack>

      <Box width="50%" px="110px" py="100px">
        <form>
          <Stack spacing={10}>
            <FormControl py="11px">
              <FormLabel fontSize='18px'>NAME</FormLabel>
              <InputGroup>
                <InputLeftElement children={<Icon as={BsFillPersonFill} fontSize="27px" />} />
                <Input type='text' size="lg" variant='Filled' />
              </InputGroup>
            </FormControl>
            <FormControl py="11px">
              <FormLabel fontSize='18px'>EMAIL</FormLabel>
              <InputGroup>
              <InputLeftElement children={<Icon as={HiMail} fontSize="27px" />} />
                <Input type='email' size="lg" variant='Filled' />
              </InputGroup>
            </FormControl>
            <FormControl py="11px">
              <FormLabel fontSize='18px'>MESSAGE</FormLabel>
              <Textarea size="lg" variant='Filled' />
            </FormControl>
            <FormControl py="11px">
              <Button fontSize='18px' type='submit' size="lg">Submit</Button>
            </FormControl>
          </Stack>
        </form>
      </Box>

    </Flex>
  )
}

export default Contact;
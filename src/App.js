import { Box, Flex, Icon } from '@chakra-ui/react';
import { React } from 'react';
import Work from './components/Work';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Flex width="100%" position="fixed" alignItems="center" fontFamily="Montserrat" zIndex="10" bg='blackAlpha.600'
      backdropFilter='blur(10px) hue-rotate(6deg)' justifyContent="space-between">
          <Flex as='b' fontSize={20} px={3} width="27%" justifyContent="center">RISHIKANT PATEL</Flex>
          {/* <Spacer /> */}
          <Flex flexDirection='row' me={4} width="38%" justifyContent="center">
            <Box p={4}>
              <NavHashLink smooth to='/#about'>ABOUT</NavHashLink>
            </Box>
            <Box py={4} px={5}>
              <NavHashLink smooth to='/#work'>WORK</NavHashLink>
            </Box>
            <Box py={4} px={5}>
              <NavHashLink smooth to='/#contact'>CONTACT</NavHashLink>
            </Box>
            <Box py={4} ps={7}>
              <Icon w={6} h={6} as={BsGithub} />
            </Box>
            <Box py={4} px={4}>
              <Icon w={6} h={6} as={GrLinkedinOption} />
            </Box>
          </Flex>
        </Flex>

        <section>
          <Box id="about" activeclassname="selected">
            <About />
          </Box>
          <Box id="work">
            <Work />
          </Box>
          <Box id="contact">
            <Contact />
          </Box>
          <Footer/>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { styled } from '@chakra-ui/react'
// import React from 'react';

// export const Signup = () => {
//   return (
//     <div className={style.container}>
//         <h1>CREATE ACCOUNT</h1>
//         <p>Complete the form below to create a bluemercury.com account.</p>

        
        import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import style from "./Signup.module.css";

export function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      className={style.container}>
      <Stack border={'2px solid blue'} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2rem'} textAlign={'center'} color={'#12284c'} marginBottom={'18px'}>
          CREATE ACCOUNT
          </Heading>
          <Text fontSize={'md'} color={'gray'} width={'90%'} >
          Complete the form below to create a bluemercury.com account.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            {/* <HStack> */}
              {/* <Box> */}
                <FormControl id="firstName" isRequired>
                  {/* <FormLabel>First Name</FormLabel> */}
                  <Input type="text" placeholder='First Name*' />
                </FormControl>
              {/* </Box> */}
              {/* <Box> */}
                <FormControl id="lastName" isRequired>
                  {/* <FormLabel>Last Name</FormLabel> */}
                  <Input type="text"  placeholder='Last Name*'/>
                </FormControl>
              {/* </Box> */}
            {/* </HStack> */}
            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input type="email"  placeholder='Email*'/>
            </FormControl>
            <FormControl id="password" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'}  placeholder='Password*'/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'#12284c'}
                color={'white'}
                _hover={{
                    bg: '#12284c',
                  }}>
               Create Account
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} fontSize={'sm'} color={'gray'}>
                Already have a bluemercury.com account? <Link textDecoration={'underline'} color={'#12284c'}>Sign In</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}



//     </div>
//   )
// }

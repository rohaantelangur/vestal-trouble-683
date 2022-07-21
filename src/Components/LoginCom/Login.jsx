import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import style from "./Login.module.css";

export function Login() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      border= {'2px solid black'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={20} border= {'2px solid black'}>
        <Stack align={'center'} >
          <Heading fontSize={'2rem'} color={'#12284c'}>Login</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Please enter your e-mail and password
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          >
          <Stack spacing={4}>
            <FormControl id="email">
              {/* <FormLabel>Email address</FormLabel> */}
              <Input type="email" placeholder='Email' isRequired />
            </FormControl>
            <FormControl id="password">
              {/* <FormLabel>Password</FormLabel> */}
              <Input type="password" placeholder='Password' isRequired />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                {/* <Link color={'blue.400'}>Forgot password?</Link> */}
              </Stack>
              <Button
                bg={'#12284c'}
                color={'white'}
                _hover={{
                  bg: '#12284c',
                }}>
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} fontSize={'sm'} color={'gray'}>
                Don't have an account? <RouterLink to='/signup' className={style.link}>Create one</RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
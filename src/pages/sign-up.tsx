import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { SignUpForm } from '../components/signUp/signUpForm';
import Image from 'next/image';

const SignUp = () => {
  return (
    <Center minH={'100vh'}>
      <Flex
        minW={['auto', 'sm']}
        flexDir={'column'}
        gap={4}
        borderColor={'blue.100'}
        borderWidth={'1px'}
        borderRadius={'3xl'}
        p={4}
      >
        <Text fontWeight={'bold'} fontSize={'xl'} textAlign={'center'}>
          Criar conta
        </Text>
        <SignUpForm />
      </Flex>
    </Center>
  );
};

export default SignUp;

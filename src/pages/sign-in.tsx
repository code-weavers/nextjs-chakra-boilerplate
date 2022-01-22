import { SignForm } from '../components/signForm';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Flex flexGrow={1} h={'100vh'} bgColor={'blue.100'}>
      <Box w={'30%'} display={['none', 'flex']} flexDirection={'column'} bg={'black'} />
      <Center w={'100%'}>
        <SignForm />
      </Center>
    </Flex>
  );
};
export default SignIn;

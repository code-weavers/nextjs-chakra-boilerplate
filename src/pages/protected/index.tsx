import { Flex, Text } from '@chakra-ui/react';
import { useUserContext } from '../../hooks/useUserContext';
import { NextPage } from 'next';

const ProtectedPage: NextPage = () => {
  const { user } = useUserContext();
  return (
    <Flex p={8}>
      <Text> Essa é uma rota protegida, somente quem tem o cookie settado pode acessala</Text>
      <Text> {user.name}</Text>
    </Flex>
  );
};

ProtectedPage.displayName = 'pao';

export default ProtectedPage;

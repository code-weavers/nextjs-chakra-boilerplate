import { GetServerSideProps, NextPage } from 'next';
import UserRepository from '../repositories/UserRepository';
import { User } from '../context/userContext';
import { Flex, Text } from '@chakra-ui/react';
import { useUserContext } from '../hooks/useUserContext';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data, error, message } = await UserRepository.findAll();

  return { props: { users: data, error } };
};

interface Home {
  users: User[];
  error: boolean;
}

const Home: NextPage<Home> = ({ users, error }) => {
  return (
    <Flex>
      <Flex p={4} gap={4}>
        {error ? (
          <Flex>Deu erro.</Flex>
        ) : (
          users.map((user) => (
            <Flex flexDir={'column'} p={4} border={'1px solid '} key={user.id}>
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.cellphone}</Text>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default Home;

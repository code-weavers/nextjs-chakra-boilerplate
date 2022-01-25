import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import UserRepository from '../repositories/UserRepository';
import { User } from '../context/userContext';
import { Flex, Text } from '@chakra-ui/react';
import { Button } from '../components/atoms/button';
import { async } from 'rxjs';
import Cookies from 'js-cookie';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { data, error } = await UserRepository.findAll();

  return { props: { users: data, error } };
};

interface Home {
  users: User[];
  error: boolean;
  response: any;
}

const Home: NextPage<Home> = ({ users, error, response }) => {
  const [userState, setUser] = useState(users);

  const fetchUser = async () => {
    const { data } = await UserRepository.findAll();
    setUser(data);
  };

  const setToken = async () => {
    Cookies.set(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmbGF2aW9AZ21haWwuY29tIiwibmFtZSI6IkZsYXZpbyIsImNlbGxwaG9uZSI6IjE3OTk3ODEzMzU2IiwiaWF0IjoxNjQzMDQwOTEwfQ.wPPEK_xhjLnLY7vS09s0yAdhNqBPHC75bC5XNNA7o6k'
    );
  };
  const removeToken = async () => {
    Cookies.remove('token');
  };

  return (
    <Flex>
      <Flex p={4} gap={4}>
        <Button onClick={fetchUser}>PEGAR USUARIOS</Button>
        <Button onClick={setToken}>Definir Token</Button>
        <Button onClick={removeToken}>Apagar token</Button>
        {!userState.length ? (
          <Flex>Deu erro.</Flex>
        ) : (
          userState.map((user) => (
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

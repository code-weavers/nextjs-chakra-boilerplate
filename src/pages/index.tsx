import { GetServerSideProps, NextPage } from 'next';
import { useContext, useEffect } from 'react';
import { UserRepositoryContext } from '../repositories/UserRepository';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { findAll } = useContext(UserRepositoryContext);

  const response = await findAll();

  return { props: response };
};

const Home: NextPage = (props) => {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return <div className='overflow-x-hidden flex flex-col'>Teste</div>;
};

export default Home;

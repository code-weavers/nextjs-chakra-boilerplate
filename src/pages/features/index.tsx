import { Center, Container, Flex, Text } from '@chakra-ui/react';
import { useUserContext } from '../../hooks/useUserContext';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '../../hooks/useModal';
import { Button } from '../../components/atoms/button';
import { useCallback, useMemo } from 'react';
import { useConfirmModal } from '../../hooks/useConfirmModal';
import { RoutesEnum } from '../../constants/routes';
import Cypress from '../../public/features/cypress.png';
import Jest from '../../public/features/jest.png';

const ProtectedPage: NextPage = () => {
  const { user } = useUserContext();
  const { openModal } = useModal();
  const { openConfirmModal } = useConfirmModal();

  const handleOpenModal = useCallback(() => {
    openModal({
      header: <Text>Hello!!!</Text>,
      body: <Text textAlign={'center'}>Display what you want</Text>,
    });
  }, [openModal]);

  const handleOpenConfirmModal = useCallback(() => {
    const alertHandler = () => alert('Flavio bixa');
    openConfirmModal(alertHandler);
  }, [openConfirmModal]);

  const features = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Modal context',
        body: <Button onClick={handleOpenModal}>Open Modal</Button>,
      },
      {
        id: 2,
        title: 'Confirm modal context',
        body: <Button onClick={handleOpenConfirmModal}>Open Modal Confirmation</Button>,
      },
      {
        id: 3,
        title: 'User Context',
        body: (
          <Flex flexDir={'column'} gap={2}>
            <Text textDecoration={'underline'}>
              <Link href={RoutesEnum.SignIn}>SignIn</Link>
            </Text>
            <Text textDecoration={'underline'}>
              <Link href={RoutesEnum.SignUp}>SignUp</Link>
            </Text>
          </Flex>
        ),
      },
      {
        id: 4,
        title: 'Tests',
        body: (
          <Flex>
            {[
              { src: Cypress, title: 'Cypress' },
              { src: Jest, title: 'Jest' },
            ].map(({ src, title }) => (
              <Image
                key={title}
                quality={100}
                width={65}
                height={65}
                title={title}
                alt={title}
                src={src}
              />
            ))}
          </Flex>
        ),
      },
    ];
  }, [handleOpenModal, handleOpenConfirmModal]);

  return (
    <Container
      maxW={'container.lg'}
      justifyContent={'center'}
      flexDir={'column'}
      p={8}
      minH={'100vh'}
    >
      <Text fontSize={'3xl'} fontWeight={'bold'} textAlign={'center'}>
        Features
      </Text>
      <Flex mx={'auto'} flexDir={['column', 'row']} mt={10} gap={4} wrap={'wrap'}>
        {features.map(({ id, title, body }) => (
          <Flex
            key={id}
            alignItems={'center'}
            flexDir={'column'}
            justifyContent={'space-between'}
            p={4}
            gap={4}
            border={'1px solid'}
            borderRadius={'md'}
          >
            <Text fontSize={'lg'} fontWeight={'bold'}>
              {title}
            </Text>
            {body}
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};

export default ProtectedPage;

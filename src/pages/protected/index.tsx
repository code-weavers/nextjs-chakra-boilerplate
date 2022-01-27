import { Flex, Text } from '@chakra-ui/react';
import { useUserContext } from '../../hooks/useUserContext';
import { NextPage } from 'next';
import { useModal } from '../../hooks/useModal';
import { Button } from '../../components/atoms/button';
import { useCallback } from 'react';
import { useConfirmModal } from '../../hooks/useConfirmModal';

const ProtectedPage: NextPage = () => {
  const { user } = useUserContext();
  const { openModal } = useModal();
  const { openConfirmModal } = useConfirmModal();

  const handleOpenModal = useCallback(() => {
    openModal({
      header: <Text>Teste</Text>,
      body: (
        <Flex flexDir={'column'}>
          <Text>Modal</Text>
          <Text>Aberta</Text>
        </Flex>
      ),
    });
  }, [openModal]);

  const handleOpenConfirmModal = useCallback(() => {
    const alertHandler = () => alert('Flavio bixa');
    openConfirmModal(alertHandler);
  }, [openConfirmModal]);

  return (
    <Flex p={8}>
      <Text> O flavio é uma bixa</Text>
      <Text> {user.name}</Text>
      <Button onClick={handleOpenModal}>Abrir modal</Button>
      <Button onClick={handleOpenConfirmModal}>Abrir modal de confirmalçao</Button>
    </Flex>
  );
};

export default ProtectedPage;

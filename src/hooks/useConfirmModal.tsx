import { useModal } from './useModal';
import { useCallback } from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';

const Body = ({ callback, closeModal }) => (
  <Flex flexDir={'row'} gap={4}>
    <Button flexGrow={1} onClick={closeModal} bg={'red'}>
      Cancel
    </Button>
    <Button flexGrow={1} bg={'green.300'}>
      Confirm
    </Button>
  </Flex>
);

export const useConfirmModal = () => {
  const { openModal, closeModal } = useModal();

  const openConfirmModal = useCallback(
    (callback: () => void) => {
      return openModal({
        header: <Text>Are you sure?</Text>,
        body: <Body callback={callback} closeModal={closeModal} />,
      });
    },
    [openModal, closeModal]
  );

  return {
    openConfirmModal,
  };
};

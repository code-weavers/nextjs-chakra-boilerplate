import React, { memo } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  body: JSX.Element;
  header: JSX.Element;
  handleModalClose: any;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, handleModalClose, body, header }) => (
  <Modal isOpen={isOpen} onClose={handleModalClose} isCentered>
    <ModalOverlay />
    <ModalContent py={4}>
      <ModalHeader d='grid' placeItems='center'>
        {header}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>{body}</ModalBody>
    </ModalContent>
  </Modal>
);

export const DefaultModal = React.memo(MyModal);

import { useContext } from 'react';
import { ModalContext } from '../context/modalContext';

export const useModal = () => {
  const { closeModal, openModal } = useContext(ModalContext);
  return {
    closeModal,
    openModal,
  };
};

import { FC, useCallback, useState } from 'react';
import { ModalState, ModalContext } from '../context/modalContext';
import { DefaultModal } from '../components/atoms/modal';

export const ModalProvider: FC = ({ children }) => {
  const [state, setState] = useState({
    open: false,
    body: <></>,
    header: <></>,
  });

  const openModal = useCallback(({ body, header }: Omit<ModalState, 'open'>) => {
    setState({ open: true, body, header });
  }, []);

  const closeModal = useCallback(() => {
    setState({ open: false, body: <></>, header: <></> });
  }, []);

  return (
    <ModalContext.Provider value={{ closeModal, openModal, state }}>
      <DefaultModal
        isOpen={state.open}
        body={state.body}
        header={state.header}
        handleModalClose={closeModal}
      />
      {children}
    </ModalContext.Provider>
  );
};

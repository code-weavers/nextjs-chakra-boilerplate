import { createContext } from 'react';

// TODO é mesmo um atomo?

export interface ModalState {
  open: boolean;
  body: JSX.Element;
  header: JSX.Element;
}

interface ModalContext {
  state: ModalState;
  openModal: (value: Omit<ModalState, 'open'>) => void;
  closeModal: () => void;
}

export const ModalContext = createContext({} as ModalContext);

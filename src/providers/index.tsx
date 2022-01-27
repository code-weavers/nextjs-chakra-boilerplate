import { FC } from 'react';
import { UserProvider } from './UserProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { ModalProvider } from './ModalProvider';

export const Providers: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ModalProvider>
        <UserProvider>{children}</UserProvider>
      </ModalProvider>
    </ChakraProvider>
  );
};

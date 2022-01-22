import { FC } from 'react';
import { UserProvider } from './UserProvider';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

export const Providers: FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>{children}</UserProvider>
    </ChakraProvider>
  );
};

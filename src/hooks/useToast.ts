import { useToast as ChakraUseToast } from '@chakra-ui/react';
import { useCallback } from 'react';

// TODO ver relação aos nomes iguals do chackra
export const useToast = () => {
  const toast = ChakraUseToast();

  const openToast = useCallback(() => {
    return toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      position: 'top-right',
      isClosable: true,
    });
  }, [toast]);

  return {
    openToast,
  };
};

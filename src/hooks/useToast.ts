import { useToast as ChakraUseToast } from '@chakra-ui/react';
import { useCallback } from 'react';

interface OpenToastParams {
  title?: string;
  description?: string;
  status: 'success' | 'info' | 'warning' | 'error';
  isClosable?: boolean;
}

// TODO ver relação aos nomes iguals do chackra
export const useToast = () => {
  const toast = ChakraUseToast();

  const openToast = useCallback(
    ({ title, description, status, isClosable = true }: OpenToastParams) => {
      return toast({
        title,
        description,
        status,
        duration: 3000,
        position: 'top-right',
        isClosable,
      });
    },
    [toast]
  );

  return {
    openToast,
  };
};

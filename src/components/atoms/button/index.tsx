import React from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export const Button: React.FC<ChakraButtonProps> = ({ children, ...props }) => {
  return (
    <ChakraButton bgColor={'blue.300'} {...props}>
      {children}
    </ChakraButton>
  );
};

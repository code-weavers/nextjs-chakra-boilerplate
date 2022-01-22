import React, { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps {
  type?: 'submit';
  buttonProps?: ChakraButtonProps;
}

export const Button: React.FC<ButtonProps> = ({ children, type, buttonProps }) => {
  return (
    <ChakraButton type={type} {...buttonProps}>
      {children}
    </ChakraButton>
  );
};

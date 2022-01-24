import React, { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

interface ButtonProps {
  onClick?: (value: any) => void;
  type?: 'submit';
  disabled?: boolean;
  buttonProps?: ChakraButtonProps;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  buttonProps,
  disabled,
  onClick,
}) => {
  return (
    <ChakraButton
      {...buttonProps}
      bgColor={'blue.300'}
      type={type}
      isDisabled={disabled}
      onClick={onClick}
    >
      {children}
    </ChakraButton>
  );
};

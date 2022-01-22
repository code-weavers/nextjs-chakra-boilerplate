import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { FieldErrors } from 'react-hook-form';
import { Input as ChakraInput, Text } from '@chakra-ui/react';
import './index.module.css';

interface DefaultInputProps {
  type?: HTMLInputTypeAttribute;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  errors?: FieldErrors;
  register: any;
}

export const Input: React.FC<DefaultInputProps> = ({
  value,
  onChange = (value: any) => null,
  type,
  label,
  errors,
  register,
}) => {
  return (
    <div className={'flex flex-col'}>
      <strong>{label}</strong>
      <ChakraInput
        fontWeight={400}
        lineHeight={'28px'}
        height={'40px'}
        padding={'10px 16px'}
        _hover={{
          bgColor: 'white',
        }}
        transition={
          'background-color 200ms ease, outline 200ms ease, color 200ms ease, box-shadow 200ms ease'
        }
        borderRadius={'8px'}
        outline={'none'}
        appearance={'none'}
        color={'#0d0c22'}
        fontSize={'14px'}
        isInvalid={errors && errors.message}
        placeholder={label}
        type={type}
        value={value}
        onChange={(value) => onChange(value)}
        {...register}
      />
      <Text color={'red.300'}>{errors && errors.message}</Text>
    </div>
  );
};

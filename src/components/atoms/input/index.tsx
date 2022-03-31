import React, { ChangeEventHandler, HTMLInputTypeAttribute, useMemo } from 'react';
import { useController, Control } from 'react-hook-form';
import { FormLabel, Input as ChakraInput, Text } from '@chakra-ui/react';
import { IMaskInput } from 'react-imask';

interface DefaultInputProps {
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  control?: Control<any>;
  name: string;
  value?: string;
  label?: string;
  mask?: string;
}

export const Input: React.FC<DefaultInputProps> = ({
  children,
  type,
  label,
  mask,
  name,
  control,
  ...props
}) => {
  // TODO verificar se tem como pegar o erro por aqui.
  const { field, formState } = useController({
    name,
    control,
    defaultValue: '',
  });

  const dynamicProps = useMemo(() => {
    let props: any = {};

    if (mask) {
      props = {
        mask,
      };
    }
    return props;
  }, [mask]);

  const errorMessage = useMemo(() => {
    return (formState.errors[name] as any)?.message;
  }, [formState, name]);

  return (
    <div className={'flex flex-col'}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        as={mask ? IMaskInput : 'input'}
        id={name}
        isInvalid={errorMessage}
        placeholder={label}
        type={type}
        {...dynamicProps}
        {...field}
        {...props}
      />
      {errorMessage && <Text color={'red.300'}>{errorMessage}</Text>}
    </div>
  );
};

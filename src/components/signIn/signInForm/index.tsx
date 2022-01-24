import { Input } from '../../atoms/input';
import { Button } from '../../atoms/button';
import { SubmitHandler } from 'react-hook-form';
import { useCallback } from 'react';
import { signInSchema } from '../../../schemas/signIn';
import { useUserContext } from '../../../hooks/useUserContext';
import { SignInParams } from '../../../context/userContext';
import { useFormResolver } from '../../../hooks/useFormResolver';
import { useToast } from '../../../hooks/useToast';
import { FormControl, Input as ChakraInput } from '@chakra-ui/react';

export const SignInForm = () => {
  const { signIn } = useUserContext();
  const { openToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormResolver<SignInParams>(signInSchema);

  const onSubmit: SubmitHandler<SignInParams> = useCallback(
    async (data) => {
      openToast();
      await signIn(data);
    },
    [signIn, openToast]
  );

  return (
    <FormControl
      minW={'sm'}
      w={'fit-content'}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type={'email'} label={'E-mail'} errors={errors.email} register={register('email')} />

      <Input
        type={'password'}
        label={'Senha'}
        errors={errors.password}
        register={register('password')}
      />

      <Button buttonProps={{ w: 'fit-content' }} type={'submit'}>
        Cadastrar
      </Button>
    </FormControl>
  );
};

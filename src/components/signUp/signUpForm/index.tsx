import { FC, useCallback } from 'react';
import { Input } from '../../atoms/input';
import { signUpSchema } from '../../../schemas/signUp';
import { SignUpParams } from '../../../context/userContext';
import { Button } from '../../atoms/button';
import { SubmitHandler } from 'react-hook-form';
import { useFormResolver } from '../../../hooks/useFormResolver';
import { Form } from '../../atoms/form';

export const SignUpForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useFormResolver<SignUpParams>(signUpSchema);

  const onSubmit: SubmitHandler<SignUpParams> = useCallback((data) => {}, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} gap={3} flexDir={'column'}>
      <Input control={control} name={'email'} label={'E-mail'} type={'email'} />
      <Input
        control={control}
        mask={'(00) 00000-0000'}
        label={'Celular'}
        name={'cellphone'}
        type={'tel'}
      />

      <Input control={control} label={'Senha'} type={'password'} name={'password'} />

      <Input
        control={control}
        name={'confirmPassword'}
        type={'password'}
        label={'Confirmar Senha'}
      />

      <Button disabled={!isValid} type={'submit'}>
        Cadastrar
      </Button>
    </Form>
  );
};

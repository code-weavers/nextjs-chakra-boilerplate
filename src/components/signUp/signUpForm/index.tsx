import { FC } from 'react';
import { Input } from '../../atoms/input';
import { signUpSchema } from '../../../schemas/signUp';
import { SignUpParams } from '../../../context/userContext';
import { useFormResolver } from '../../../hooks/useFormResolver';
import { Form } from '../../atoms/form';
import { useUserContext } from '../../../hooks/useUserContext';
import { RoutesEnum } from '../../../constants/routes';
import { Button } from '@chakra-ui/react';

export const SignUpForm: FC = () => {
  const { signUp, user } = useUserContext();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useFormResolver<SignUpParams>(signUpSchema);

  return (
    <Form
      onSubmit={handleSubmit((values) => signUp(values, RoutesEnum.Home))}
      gap={3}
      flexDir={'column'}
    >
      {user.name}
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

      <Button disabled={!isValid} type={'submit'} isLoading={isSubmitting}>
        Cadastrar
      </Button>
    </Form>
  );
};

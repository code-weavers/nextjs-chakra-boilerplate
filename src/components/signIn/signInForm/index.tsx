import { Input } from '../../atoms/input';
import { Button } from '../../atoms/button';
import { SubmitHandler } from 'react-hook-form';
import { useCallback, useState } from 'react';
import { signInSchema } from '../../../schemas/signIn';
import { useUserContext } from '../../../hooks/useUserContext';
import { SignInParams } from '../../../context/userContext';
import { useFormResolver } from '../../../hooks/useFormResolver';
import { Form } from '../../atoms/form';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { MdOutlineWarning } from 'react-icons/md';

export const SignInForm = () => {
  const { signIn } = useUserContext();
  const [errorMessage, setErrorMessage] = useState('');

  const { control, handleSubmit } = useFormResolver<SignInParams>(signInSchema);

  const onSubmit: SubmitHandler<SignInParams> = useCallback(
    async (data) => {
      console.log(data);
      const { message } = await signIn(data);
      setErrorMessage(message);
    },
    [signIn]
  );

  return (
    <Form
      minW={'sm'}
      w={'fit-content'}
      display={'flex'}
      flexDirection={'column'}
      gap={3}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type={'email'} label={'E-mail'} name={'email'} control={control} />

      <Input type={'password'} label={'Senha'} name={'password'} control={control} />

      {errorMessage && (
        <Flex
          p={4}
          bgColor={'red.100'}
          alignItems={'center'}
          borderRadius={'md'}
          textColor={'red.500'}
        >
          <Icon as={MdOutlineWarning} color={'red.500'} mr={2} />
          <Text>{errorMessage}</Text>
        </Flex>
      )}

      <Button w={'fit-content'} type={'submit'}>
        Entrar
      </Button>
    </Form>
  );
};

import { SignInParams, SignUpParams, User, UserContext } from '../context/userContext';
import { FC, useCallback, useState } from 'react';
import UserRepository from '../repositories/UserRepository';
import { useToast } from '../hooks/useToast';
import { RoutesEnum } from '../constants/routes';
import { useRouter } from 'next/router';
import AuthRepository from '../repositories/AuthRepository';
import CookiesHandler, { CookiesEnum } from '../utils/CookiesHandler';

export const UserProvider: FC = ({ children }) => {
  const router = useRouter();
  const { openToast } = useToast();
  const [state, setState] = useState<User>({
    id: 0,
    email: '',
    cellphone: '',
    name: '',
  });

  const setUser = useCallback(
    (user: Partial<User>) => {
      setState((value) => ({ ...value, ...user }));
    },
    [setState]
  );

  const signIn = useCallback(
    async (values: SignInParams) => {
      const {
        data: { token, user },
        error,
        message,
      } = await AuthRepository.signIn(values);

      if (!error) {
        setUser(user);
        CookiesHandler.setCookie(CookiesEnum.AuthorizationToken, token);
        return await router.push('/');
      }

      return {
        message,
      };
    },
    [router, setUser]
  );

  const signUp = useCallback(
    async (values: SignUpParams, pushTo: RoutesEnum) => {
      const { data, error, message } = await UserRepository.create(values);
      openToast({ title: message, status: error ? 'error' : 'success' });
      if (!error) {
        setUser(data);
        if (pushTo) await router.push(pushTo);
      }
    },
    [setUser, openToast, router]
  );

  const logOut = useCallback(() => {}, []);

  return (
    <UserContext.Provider
      value={{
        user: state,
        setUser,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

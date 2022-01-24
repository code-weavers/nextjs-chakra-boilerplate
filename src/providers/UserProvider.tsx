import { SignInParams, SignUpParams, User, UserContext } from '../context/userContext';
import { FC, useCallback, useState } from 'react';
import useSWR from 'swr';
export const UserProvider: FC = ({ children }) => {
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

  const signIn = useCallback(async (values: SignInParams) => {
    console.log(values);
  }, []);

  const signUp = useCallback(async (values: SignUpParams) => {}, []);

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

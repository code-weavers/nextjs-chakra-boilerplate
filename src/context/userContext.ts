import React from 'react';
import { RoutesEnum } from '../constants/routes';

// TODO ver onde colocar essas interface
export interface User {
  id: number;
  email: string;
  name: string;
  cellphone: string;
}

export interface SignUpParams extends Omit<User, 'id' | 'name'> {
  password: string;
  confirmPassword: string;
}

export interface SignInParams {
  email: string;
  password: string;
}
interface SignInResponse {
  message: string;
}

interface UserContext {
  user: User;
  setUser: (user: Partial<User>) => void;
  signIn: (values: SignInParams) => Promise<SignInResponse>;
  signUp: (values: SignUpParams, pushTo: RoutesEnum) => Promise<void>;
  logOut: () => void;
}

export const UserContext = React.createContext<UserContext>({} as UserContext);

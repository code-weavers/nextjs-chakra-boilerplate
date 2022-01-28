import AbstractRepository from './AbstractRepository';
import { SignInParams, User } from '../context/userContext';

interface SignInResponse {
  user: User;
  token: string;
}

class AuthRepository extends AbstractRepository {
  async signIn(data: SignInParams) {
    return this.makeRequest<SignInResponse>({
      url: '/auth/login',
      defaultValue: {},
      data,
      method: 'post',
    });
  }

  recoverPassword() {}
}

export default new AuthRepository();

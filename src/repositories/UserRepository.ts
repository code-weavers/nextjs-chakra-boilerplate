import { SignUpParams, User } from '../context/userContext';
import AbstractRepository from './AbstractRepository';

class UserRepository extends AbstractRepository {
  create(data: SignUpParams) {
    return this.api.post<User>('users', data);
  }
  async findAll() {
    try {
      const response = await this.api.get<User[]>('users');

      return {
        data: response.data,
        error: false,
        response: { ...response },
      };
    } catch (e) {
      return {
        error: true,
        data: [],
        response: { ...e },
      };
    }
  }
}
export default new UserRepository();

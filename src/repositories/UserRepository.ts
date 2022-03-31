import { SignUpParams, User } from '../context/userContext';

import AbstractRepository from './AbstractRepository';

class UserRepository extends AbstractRepository {
  create(data: SignUpParams) {
    return this.makeRequest<User>({
      method: 'post',
      url: 'users',
      data: { ...data, cellphone: this.formatters.removeSpecialsCharacters(data.cellphone) },
      defaultValue: {},
    });
  }

  findAll() {
    return this.makeRequest<User[]>({
      method: 'get',
      url: 'users',
      defaultValue: [],
    });
  }
}
export default new UserRepository();

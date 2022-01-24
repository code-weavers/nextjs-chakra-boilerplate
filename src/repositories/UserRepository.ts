import React, { FC, useCallback, useEffect } from 'react';
import { api } from '../services/api';
import { SignUpParams, User } from '../context/userContext';
import { AxiosResponse } from 'axios';
import AbstractRepository from './AbstractRepository';

class UserRepository extends AbstractRepository {
  create(data: SignUpParams) {
    return this.api.post<User>('users', data);
  }
  findAll() {
    return this.api.get<User[]>('users');
  }
}
export default new UserRepository();

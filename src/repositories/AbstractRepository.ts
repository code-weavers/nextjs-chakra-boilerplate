import { api } from '../services/api';
import { AxiosInstance } from 'axios';

class AbstractRepository {
  protected api: AxiosInstance;
  constructor() {
    this.api = api;
  }
}

export default AbstractRepository;

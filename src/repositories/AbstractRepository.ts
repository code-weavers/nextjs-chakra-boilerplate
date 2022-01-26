import { api } from '../services/api';
import { AxiosInstance, Method } from 'axios';
import { removeSpecialsCharacters } from '../utils/converters';

interface MakeRequestParams {
  url: string;
  defaultValue: any;
  data?: object;
  params?: object;
  headers?: object;
  method: Method;
}

class AbstractRepository {
  private api = api;
  protected formatters = {
    removeSpecialsCharacters: removeSpecialsCharacters,
  };

  protected async makeRequest<T = void>({
    url,
    defaultValue,
    params,
    data,
    method,
  }: MakeRequestParams &
    (T extends void ? 'You must provide a type parameter' : MakeRequestParams)) {
    try {
      console.log(this.api);
      const response = await this.api({
        method,
        url,
        params,
        data,
      });
      console.log(response);

      return {
        error: false,
        data: (response.data || defaultValue) as T,
        message: response.data?.message || 'Message not send',
        status: response.status,
      };
    } catch ({ response = {}, message }) {
      console.log(message);
      return {
        error: true,
        data: defaultValue as T,
        message: response.data?.message,
        status: response.status,
      };
    }
  }
}

export default AbstractRepository;

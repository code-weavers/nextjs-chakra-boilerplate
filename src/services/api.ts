import axios from 'axios';

import CookiesHandler, { CookiesEnum } from '../utils/CookiesHandler';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${CookiesHandler.getCookie(
      CookiesEnum.AuthorizationToken
    )}`;
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

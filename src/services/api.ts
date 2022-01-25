import axios from 'axios';

import CookieSingleton from '../utils/CookieSingleton';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${CookieSingleton.token}`;
    return config;
  },
  (error) => {
    return Promise.resolve(error);
  }
);

import axios from 'axios';
import { getToken } from '../services/token';

const BACKEND_URL = ' https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const appApi = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
});

appApi.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  },
);

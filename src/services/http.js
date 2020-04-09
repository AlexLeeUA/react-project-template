import axios from 'axios';
import storageService from './storageService';
import { httpNames } from '../utils/constants/httpNames';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  async (config) => {
    config.headers['Content-Type'] = 'application/json';
    const token = await storageService.getItem(httpNames.TOKEN_NAME);
    if (token) {
      config.headers['Access-Token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// instance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         if (globalStore.user) {
//           authStore.logout();
//         }
//         return Promise.reject(error);
//       }
//       if (error.response.status >= 500) {
//         console.log(`Server is unavailable, please check your internet connection or just try later.`)
//       }
//     }
//     return Promise.reject(error);
//   }
// );

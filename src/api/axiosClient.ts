import axios, { AxiosRequestConfig } from 'axios';
import store from '../redux/store'; // lib/store yerine yeni yapıya göre

const instance = axios.create({
  baseURL: 'https://mobileapitest.ecza1.com/api',
  timeout: 60000,
});

instance.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
  const state = store.getState();

  if (state.user.sessionToken) {
    requestConfig.headers = {
      ...requestConfig.headers,
      token: state.user.sessionToken,
    };
  }

  return requestConfig;
});

export default instance;

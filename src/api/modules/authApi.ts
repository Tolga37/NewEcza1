import api from '../axiosClient';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponse {
  Success: boolean;
  ReturnValue: {
    Token: string;
    Email: string;
  };
}

export const loginRequest = async (data: LoginPayload): Promise<LoginResponse> => {
  const response = await api.post('/security/login-mobile', data);
  return response.data;
};

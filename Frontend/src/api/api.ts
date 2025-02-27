import axios from 'axios';
import { config } from '../config/config';

const api = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 1000 * 60,
});

interface LoginResponse {
  message: string;
  token: string;
}

export const loginRequest = async (email: string, password: string): Promise<LoginResponse> => {
  const { data } = await api.post('/api/users/login', { email, password });
  return data;
};

export const signUpRequest = async (email:string, name:string, passwword:string): Promise<LoginResponse> => {
    const { data } = await api.post('/api/users/signup', { email, name, passwword });
    return data;
}

import axios from 'axios';
import { config } from '../config/config';
import { SignUpFormData } from '../schemas/auth.schema';

const api = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: 1000 * 60,
});

export interface AuthResponse {
  message: string;
  token: string;
}

export const loginRequest = async (email: string, password: string): Promise<AuthResponse> => {
  const { data } = await api.post('/api/users/login', { email, password });
  return data;
};

export const signUpRequest = async (formData: SignUpFormData): Promise<AuthResponse> => {
  const { email, name, password } = formData;
  const { data } = await api.post('/api/users/signup', { email, name, password });
  return data;
};

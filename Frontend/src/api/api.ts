import axios from 'axios';
import { LoginFormData, SignUpFormData } from '../schemas/auth.schema';
import { TOKENS } from '../config/tokens.config';

const api = axios.create({
  baseURL: TOKENS.api.baseUrl,
  timeout: TOKENS.api.timeout,
});

export interface AuthResponse {
  message: string;
  token: string;
}

export const loginRequest = async (formData: LoginFormData): Promise<AuthResponse> => {
  const { data } = await api.post(TOKENS.api.users.login, formData);
  return data;
};

export const signUpRequest = async (formData: SignUpFormData): Promise<AuthResponse> => {
  const { email, name, password } = formData;
  const { data } = await api.post(TOKENS.api.users.signup, { email, name, password });
  return data;
};

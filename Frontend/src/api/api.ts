import axios from 'axios';
import { LoginFormData, SignUpFormData } from '../schemas/auth.schema';
import { TOKENS } from '../strings/tokens';

const api = axios.create({
  baseURL: TOKENS.api.baseUrl,
  timeout: TOKENS.api.timeout,
  withCredentials: true,
});

export interface AuthResponse {
  message: string;
  token: string;
}

export interface VerifyAuthResponse {
  message: string;
  token: string;
  email: string;
  name: string;
}

export const loginRequest = async (formData: LoginFormData): Promise<AuthResponse> => {
  const { data } = await api.post(TOKENS.api.users.login, formData);
  return data;
};

export const logoutRequest = async (): Promise<AuthResponse> => {
  const { data } = await api.post(TOKENS.api.users.logout);
  return data;
};

export const signUpRequest = async (formData: SignUpFormData): Promise<AuthResponse> => {
  const { email, name, password } = formData;
  const { data } = await api.post(TOKENS.api.users.signup, { email, name, password });
  return data;
};

export const verifyCurrentUserRequest = async (): Promise<VerifyAuthResponse> => {
  const { data } = await api.get(TOKENS.api.users.me);
  return data;
};

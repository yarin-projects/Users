import bcrypt from 'bcrypt';
import { TOKENS } from './tokens.utils';

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, TOKENS.bcryptRounds);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

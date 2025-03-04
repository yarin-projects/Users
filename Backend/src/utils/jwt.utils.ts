import jwt from 'jsonwebtoken';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { TOKENS } from './tokens.utils';
import { JwtExpiry } from '../types/jwt-expiry.type';

const tokenExpiry: JwtExpiry = (process.env.JWT_EXPIRATION as JwtExpiry) || TOKENS.jwtExpiry;

export const generateToken = (payload: IUserPayload) => {
  return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: tokenExpiry });
};

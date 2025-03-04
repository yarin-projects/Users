import jwt from 'jsonwebtoken';
import { IUserPayload } from '../interfaces/IUserPayload';
import { TOKENS } from '../tokens';
import { JwtExpiry } from '../types/jwt-expiry';

const tokenExpiry: JwtExpiry = (process.env.JWT_EXPIRATION as JwtExpiry) || TOKENS.jwtExpiry;

export const generateToken = (payload: IUserPayload) => {
  return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: tokenExpiry });
};

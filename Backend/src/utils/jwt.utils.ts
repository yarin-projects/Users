import jwt from 'jsonwebtoken';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { TOKENS } from './tokens.utils';
import { JwtExpiry } from '../types/jwt-expiry.type';

const tokenExpiry: JwtExpiry = (process.env.JWT_EXPIRATION as JwtExpiry) || TOKENS.jwtExpiry;

export const generateToken = (payload: IUserPayload) => {
  return jwt.sign(payload, process.env.JWT_KEY!, { expiresIn: tokenExpiry });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_KEY!);
};

const timeValue = Number(tokenExpiry.slice(0, -1));
const unit = tokenExpiry.slice(-1);

const multipliers: { [key: string]: number } = {
  s: 1000,
  m: 60 * 1000,
  h: 60 * 60 * 1000,
  d: 24 * 60 * 60 * 1000,
};

export const expires = new Date(Date.now() + timeValue * (multipliers[unit] || 0));

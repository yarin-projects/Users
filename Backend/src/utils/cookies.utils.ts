import { Response } from 'express';
import { TOKENS } from './tokens.utils';
import { expires } from './jwt.utils';

export const setCookie = (res: Response, token: string) => {
  res.cookie(TOKENS.token, token, { httpOnly: true, expires: expires });
};

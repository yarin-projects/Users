import { NextFunction, Request, Response } from 'express';
import { TOKENS } from '../utils/tokens.utils';
import { handleError } from '../utils/error-handler.utils';
import { verifyToken } from '../utils/jwt.utils';
import { IUserPayload } from '../interfaces/user-payload.interface';

export const authenticateUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const token = req.cookies[TOKENS.token];
    if (!token) {
      handleError(res, new Error(TOKENS.errors.noTokenProvided));
      return;
    }
    const payload = verifyToken(token) as IUserPayload;
    if (!payload) {
      handleError(res, new Error(TOKENS.errors.invalidToken));
      return;
    }
    req.user = payload;
    next();
  } catch (error) {
    handleError(res, error);
    return;
  }
};

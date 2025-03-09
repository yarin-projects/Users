import { NextFunction, Response } from 'express';
import { TOKENS } from '../utils/tokens.utils';
import { handleError } from '../utils/error-handler.utils';
import { verifyToken } from '../utils/jwt.utils';
import { IUserPayload } from '../interfaces/user-payload.interface';
import { AuthRequest } from '../interfaces/auth-request.interface';

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const token = req.cookies[TOKENS.token];
  if (!token) {
    handleError(res, new Error(TOKENS.errors.noTokenProvided));
    return;
  }
  try {
    const decodedData = verifyToken(token) as IUserPayload;
    req.user = decodedData;
    next();
  } catch (error) {
    handleError(res, error);
    return;
  }
};

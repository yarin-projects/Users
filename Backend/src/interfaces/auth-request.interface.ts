import { Request } from 'express';
import { IUserPayload } from './user-payload.interface';

export interface AuthRequest extends Request {
  user?: IUserPayload;
}

import 'express';
import { IUserPayload } from '../../interfaces/user-payload.interface';

declare global {
  namespace Express {
    interface Request {
      user?: IUserPayload;
    }
  }
}

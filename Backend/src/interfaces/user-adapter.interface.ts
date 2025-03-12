import { IMongoUser } from './mongo-user.interface';
import IUser from './user.interface';

export interface IUserAdapter {
  convertToStandardUser(user: IUser | IMongoUser): IUser;
}

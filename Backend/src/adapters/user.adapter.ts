import { IMongoUser } from '../interfaces/mongo-user.interface';
import { IUserAdapter } from '../interfaces/user-adapter.interface';
import IUser from '../interfaces/user.interface';

export class UserAdapter implements IUserAdapter {
  convertToStandardUser(user: IUser | IMongoUser): IUser {
    if ('_id' in user) {
      const { _id, name, email, password } = user;
      return {
        id: _id.toString(),
        name,
        email,
        password,
      };
    }
    return user;
  }
}

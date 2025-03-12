import IBaseUser from './base-user.interface';

export default interface IUser extends IBaseUser {
  id: string;
  name: string;
}

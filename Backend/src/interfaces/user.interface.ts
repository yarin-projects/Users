import IBaseUser from './base-user.interface';

export default interface IUser extends IBaseUser {
  _id: string;
  name: string;
}

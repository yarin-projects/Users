import IBaseUser from './IBaseUser';

export default interface IUser extends IBaseUser {
  _id: string;
  name: string;
}

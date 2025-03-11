import { IUserBuilder } from '../interfaces/user-builder.interface';
import IUser from '../interfaces/user.interface';

export class UserBuilder implements IUserBuilder {
  private user: Partial<IUser>;
  constructor() {
    this.user = {};
  }
  setName(name: string): IUserBuilder {
    this.user.name = name;
    return this;
  }
  setEmail(email: string): IUserBuilder {
    this.user.email = email;
    return this;
  }
  setPassword(password: string): IUserBuilder {
    this.user.password = password;
    return this;
  }
  setId(id: string): IUserBuilder {
    this.user._id = id;
    return this;
  }
  build(): IUser {
    return this.user as IUser;
  }
}

import { inject, injectable } from 'inversify';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from '../interfaces/user.interface';
import IUserRepository from '../interfaces/user-repository.interface';
import User from '../models/user-mongo.model';
import { TOKENS } from '../utils/tokens.utils';
import { IUserAdapter } from '../interfaces/user-adapter.interface';

@injectable()
export class UserMongoDbRepository implements IUserRepository {
  constructor(@inject(TOKENS.IUserAdapter) private userAdapter: IUserAdapter) {}
  convertToUser(user: any): IUser | null {
    return user ? this.userAdapter.convertToStandardUser(user) : null;
  }
  async create(data: SignUpRequestDTO): Promise<IUser | null> {
    const user = new User(data);
    const newUser = await user.save();
    return this.convertToUser(newUser);
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }
  async findById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }
  async updateUserName(id: string, data: string): Promise<IUser | null> {
    const user = await User.findById(id);
    user!.name = data;
    const updatedUser = await user!.save();
    return this.convertToUser(updatedUser);
  }
}

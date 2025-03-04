import { injectable } from 'inversify';
import SignUpRequestDTO from '../DTOs/signUp.dto';
import IUser from '../interfaces/IUser';
import IUserRepository from '../interfaces/IUserRepository';
import User from '../models/user.mongo.model';

@injectable()
export class UserMongoDbRepository implements IUserRepository {
  async create(data: SignUpRequestDTO): Promise<IUser | null> {
    const newUser = new User(data);
    return await newUser.save();
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ email });
  }
  async findById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }
}

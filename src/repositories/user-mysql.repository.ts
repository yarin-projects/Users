import SignUpRequestDTO from '../DTOs/signUp.dto';
import IUser from '../interfaces/IUser';
import IUserRepository from '../interfaces/IUserRepository';
import { User } from '../models/user-sql.model';

export class UserSqlRepository implements IUserRepository {
  async create(data: SignUpRequestDTO): Promise<IUser | null> {
    const newUser = await User.create({ data });
    return await newUser.save();
  }
  async findByEmail(email: string): Promise<IUser | null> {
    return await User.findOne({ where: { email } });
  }
  async findById(id: string): Promise<IUser | null> {
    return await User.findByPk(id);
  }
}

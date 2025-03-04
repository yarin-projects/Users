import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from '../interfaces/user.interface';
import IUserRepository from '../interfaces/user-repository.interface';
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

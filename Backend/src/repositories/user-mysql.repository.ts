import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from '../interfaces/user.interface';
import IUserRepository from '../interfaces/user-repository.interface';
import { User } from '../models/user-sql.model';
import UpdateNameRequestDTO from '../DTOs/update-name.dto';

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
  async updateUserName(id: string, data: UpdateNameRequestDTO): Promise<IUser | null> {
    const updateUser = await User.findByPk(id);
    updateUser!.name = data.name;
    await updateUser?.save();
    return updateUser;
  }
}

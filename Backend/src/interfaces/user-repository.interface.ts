import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from './user.interface';

export default interface IUserRepository {
  create(data: SignUpRequestDTO): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  updateUserName(id: string, data: string): Promise<IUser | null>;
}

import SignUpRequestDTO from '../DTOs/sign-up.dto';
import UpdateNameRequestDTO from '../DTOs/update-name.dto';
import IUser from './user.interface';

export default interface IUserRepository {
  create(data: SignUpRequestDTO): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
  updateName(email: string, data: UpdateNameRequestDTO): Promise<IUser | null>;
}

import SignUpRequestDTO from '../DTOs/signUp.dto';
import IUser from './IUser';

export default interface IUserRepository {
  create(data: SignUpRequestDTO): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  findById(id: string): Promise<IUser | null>;
}

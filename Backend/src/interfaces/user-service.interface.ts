import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import UpdateNameRequestDTO from '../DTOs/update-name.dto';
import IUser from './user.interface';

export default interface IUserService {
  signUp(data: SignUpRequestDTO): Promise<string>;
  login(data: LoginRequestDTO): Promise<string>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  updateName(email: string, data: UpdateNameRequestDTO): Promise<IUser | null>;
}

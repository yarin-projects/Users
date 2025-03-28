import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from './user.interface';

export default interface IUserService {
  signUp(data: SignUpRequestDTO): Promise<string>;
  login(data: LoginRequestDTO): Promise<string>;
  getUserById(id: string): Promise<IUser | null>;
  getUserByEmail(email: string): Promise<IUser | null>;
  updateUserName(id: string, data: string): Promise<IUser | null>;
}

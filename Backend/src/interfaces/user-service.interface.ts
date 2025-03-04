import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUser from './user.interface';

export default interface IUserService {
  signUp(data: SignUpRequestDTO): Promise<string>;
  login(data: LoginRequestDTO): Promise<string>;
  getUser(id: string): Promise<IUser | null>;
}

import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/signUp.dto';
import IUser from './IUser';

export default interface IUserService {
  signUp(data: SignUpRequestDTO): Promise<string>;
  login(data: LoginRequestDTO): Promise<string>;
  getUser(id: string): Promise<IUser | null>;
}

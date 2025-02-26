import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/signUp.dto';

export default interface IUserService {
  signUp(data: SignUpRequestDTO): Promise<string>;
  login(data: LoginRequestDTO): Promise<string>;
}

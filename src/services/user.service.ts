import { inject, injectable } from 'inversify';
import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/signUp.dto';
import IUserService from '../interfaces/IUserService';
import { comparePassword, hashPassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';
import IUserRepository from '../interfaces/IUserRepository';
import IUser from '../interfaces/IUser';
import { TOKENS } from '../tokens';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.IUserRepository) private userRepository: IUserRepository) {}

  async signUp(data: SignUpRequestDTO): Promise<string> {
    const { email, password, name } = data;

    const exisitingUser: IUser | null = await this.userRepository.findByEmail(email);

    if (exisitingUser) {
      throw new Error(TOKENS.errors.userExists);
    }

    const hashedPassword = await hashPassword(password);

    const newUser: IUser | null = await this.userRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    if (!newUser) {
      throw new Error(TOKENS.errors.userCouldNotBeCreated);
    }
    return generateToken({ id: newUser._id.toString() });
  }

  async login(data: LoginRequestDTO): Promise<string> {
    const { email, password } = data;

    const exisitngUser: IUser | null = await this.userRepository.findByEmail(email);

    if (!exisitngUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }

    const isPasswordValid: boolean = await comparePassword(password, exisitngUser.password);

    if (!isPasswordValid) {
      throw new Error(TOKENS.errors.invalidPassword);
    }
    return generateToken({ id: exisitngUser._id.toString() });
  }
}

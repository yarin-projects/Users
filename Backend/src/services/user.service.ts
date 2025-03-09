import { inject, injectable } from 'inversify';
import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUserService from '../interfaces/user-service.interface';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { generateToken } from '../utils/jwt.utils';
import IUserRepository from '../interfaces/user-repository.interface';
import IUser from '../interfaces/user.interface';
import { TOKENS } from '../utils/tokens.utils';

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
    return generateToken({ id: newUser._id.toString(), email: newUser.email });
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
    return generateToken({ id: exisitngUser._id.toString(), email: exisitngUser.email  });
  }
  async getUser(id: string): Promise<IUser | null> {
    if (!id || id === '') {
      throw new Error(TOKENS.errors.invalidId);
    }
    const exisitingUser = await this.userRepository.findById(id);
    if (!exisitingUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }
    return exisitingUser;
  }
}

import { inject, injectable } from 'inversify';
import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUserService from '../interfaces/user-service.interface';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { generateToken } from '../utils/jwt.utils';
import IUserRepository from '../interfaces/user-repository.interface';
import IUser from '../interfaces/user.interface';
import { TOKENS } from '../utils/tokens.utils';
import UpdateNameRequestDTO from '../DTOs/update-name.dto';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.IUserRepository) private userRepository: IUserRepository) {}

  async signUp(data: SignUpRequestDTO): Promise<string> {
    const { email, password, name } = data;

    const existingUser: IUser | null = await this.userRepository.findByEmail(email);

    if (existingUser) {
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
    return generateToken({
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
    });
  }

  async login(data: LoginRequestDTO): Promise<string> {
    const { email, password } = data;

    const existingUser: IUser | null = await this.userRepository.findByEmail(email);

    if (!existingUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }

    const isPasswordValid: boolean = await comparePassword(password, existingUser.password);

    if (!isPasswordValid) {
      throw new Error(TOKENS.errors.invalidPassword);
    }
    return generateToken({
      id: existingUser._id.toString(),
      email: existingUser.email,
      name: existingUser.name,
    });
  }
  async getUserById(id: string): Promise<IUser | null> {
    if (!id || id === '') {
      throw new Error(TOKENS.errors.invalidId);
    }
    const existingUser = await this.userRepository.findById(id);
    if (!existingUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }
    return existingUser;
  }
  async getUserByEmail(email: string): Promise<IUser | null> {
    if (!email || email === '') {
      throw new Error(TOKENS.errors.invalidEmail);
    }
    const existingUser = await this.userRepository.findByEmail(email);
    if (!existingUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }
    return existingUser;
  }
  async updateName(email: string, data: UpdateNameRequestDTO): Promise<IUser | null> {
    if (!email || email === '' || !data.name || data.name === '') {
      throw new Error(TOKENS.errors.invalidData);
    }
    const updatedUser = await this.userRepository.updateName(email, data);
    if (!updatedUser) {
      throw new Error(TOKENS.errors.userNotFound);
    }
    return updatedUser;
  }
}

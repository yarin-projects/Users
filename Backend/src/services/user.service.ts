import { inject, injectable } from 'inversify';
import LoginRequestDTO from '../DTOs/login.dto';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import IUserService from '../interfaces/user-service.interface';
import { comparePassword, hashPassword } from '../utils/bcrypt.utils';
import { generateToken } from '../utils/jwt.utils';
import IUserRepository from '../interfaces/user-repository.interface';
import IUser from '../interfaces/user.interface';
import { TOKENS } from '../utils/tokens.utils';
import { UserBuilder } from '../builders/user.builder';
import { userEventEmitter } from '../events/user-event-emitter';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TOKENS.IUserRepository) private userRepository: IUserRepository) {}

  async signUp(data: SignUpRequestDTO): Promise<string> {
    const { email, password, name } = data;

    const existingUser: IUser | null = await this.userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error(TOKENS.errors.userExists);
    }

    const partialUser = new UserBuilder();

    partialUser.setName(name).setEmail(email);

    const hashedPassword = await hashPassword(password);

    partialUser.setPassword(hashedPassword);
    const user = partialUser.build();

    const newUser: IUser | null = await this.userRepository.create(user);

    if (!newUser) {
      throw new Error(TOKENS.errors.userCouldNotBeCreated);
    }

    partialUser.setId(newUser.id);

    userEventEmitter.emit(TOKENS.events.userCreated, partialUser.build());

    return generateToken({
      id: newUser.id,
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
      id: existingUser.id,
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
  async updateUserName(id: string, data: string): Promise<IUser | null> {
    if (!data || '') {
      throw new Error(TOKENS.errors.invalidName);
    }

    if (!id || '') {
      throw new Error(TOKENS.errors.invalidId);
    }

    return await this.userRepository.updateUserName(id, data);
  }
}

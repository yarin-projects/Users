import { Container } from 'inversify';
import { UserService } from '../services/user.service';
import IUserRepository from '../interfaces/user-repository.interface';
import IUserService from '../interfaces/user-service.interface';
import { UserController } from '../controllers/user.controller';
import { TOKENS } from '../utils/tokens.utils';
import { UserRepositoryFactory } from '../factories/user-repository.factory';
import 'dotenv/config';

const container = new Container();

const userRepository: IUserRepository = UserRepositoryFactory.createRepository(
  process.env.DB_TYPE!
);
container.bind<IUserRepository>(TOKENS.IUserRepository).toConstantValue(userRepository);

container.bind<IUserService>(TOKENS.IUserService).to(UserService);
container.bind<UserController>(TOKENS.UserController).to(UserController);

export { container };

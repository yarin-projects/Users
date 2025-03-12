import { Container } from 'inversify';
import { UserService } from '../services/user.service';
import IUserRepository from '../interfaces/user-repository.interface';
import IUserService from '../interfaces/user-service.interface';
import { UserController } from '../controllers/user.controller';
import { TOKENS } from '../utils/tokens.utils';
import { UserRepositoryFactory } from '../factories/user-repository.factory';
import { IUserAdapter } from '../interfaces/user-adapter.interface';
import { UserAdapter } from '../adapters/user.adapter';
import 'dotenv/config';

const dbType = process.env.DB_TYPE!;

const container = new Container();

container.bind<IUserAdapter>(TOKENS.IUserAdapter).to(UserAdapter);
const userAdapter = container.get<IUserAdapter>(TOKENS.IUserAdapter);

const userRepository: IUserRepository = UserRepositoryFactory.createRepository(dbType, userAdapter);

container.bind<IUserRepository>(TOKENS.IUserRepository).toConstantValue(userRepository);

container.bind<IUserService>(TOKENS.IUserService).to(UserService);
container.bind<UserController>(TOKENS.UserController).to(UserController);

export { container };

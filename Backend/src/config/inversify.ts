import { Container } from 'inversify';
import { UserMongoDbRepository } from '../repositories/user-mongo.repository';
import { UserService } from '../services/user.service';
import IUserRepository from '../interfaces/user-repository.interface';
import IUserService from '../interfaces/user-service.interface';
import { UserController } from '../controllers/user.controller';
import { UserSqlRepository } from '../repositories/user-mysql.repository';
import { TOKENS } from '../utils/tokens.utils';
import 'dotenv/config';

const container = new Container();

if (process.env.DB_TYPE === TOKENS.mongodb) {
  container.bind<IUserRepository>(TOKENS.IUserRepository).to(UserMongoDbRepository);
} else if (process.env.DB_TYPE === TOKENS.mysql) {
  container.bind<IUserRepository>(TOKENS.IUserRepository).to(UserSqlRepository);
}
container.bind<IUserService>(TOKENS.IUserService).to(UserService);
container.bind<UserController>(TOKENS.UserController).to(UserController);

export { container };

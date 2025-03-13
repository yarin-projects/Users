import { injectable } from 'inversify';
import IUserRepository from '../interfaces/user-repository.interface';
import { TOKENS } from '../utils/tokens.utils';
import { UserMongoDbRepository } from '../repositories/user-mongo.repository';
import { UserSqlRepository } from '../repositories/user-mysql.repository';
import { IUserAdapter } from '../interfaces/user-adapter.interface';

@injectable()
export class UserRepositoryFactory {
  public static createRepository(dbType: string, userAdapter: IUserAdapter): IUserRepository {
    switch (dbType) {
      case TOKENS.mongodb:
      case TOKENS.docker:
        return new UserMongoDbRepository(userAdapter);
      case TOKENS.mysql:
        return new UserSqlRepository();
      default:
        throw new Error(TOKENS.errors.dbTypeInvalid);
    }
  }
}

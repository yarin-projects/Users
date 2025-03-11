import { injectable } from 'inversify';
import IUserRepository from '../interfaces/user-repository.interface';
import { TOKENS } from '../utils/tokens.utils';
import { UserMongoDbRepository } from '../repositories/user-mongo.repository';
import { UserSqlRepository } from '../repositories/user-mysql.repository';

@injectable()
export class UserRepositoryFactory {
  public static createRepository(dbType: string): IUserRepository {
    switch (dbType) {
      case TOKENS.mongodb:
        return new UserMongoDbRepository();
      case TOKENS.mysql:
        return new UserSqlRepository();
      default:
        throw new Error(TOKENS.errors.dbTypeInvalid);
    }
  }
}

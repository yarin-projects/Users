import { TOKENS } from '../utils/tokens.utils';
import { MongoDbConnection } from './mongodb.config';
import { MySqlConnection } from './mysql.config';

export const dbConnection = async () => {
  const { DOCKER_DB_URL, LOCAL_DB_URL, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_TYPE } =
    process.env;
  if (!DB_TYPE) {
    throw new Error(TOKENS.errors.dbTypeUndefined);
  }
  switch (DB_TYPE) {
    case TOKENS.docker:
      if (!DOCKER_DB_URL) {
        throw new Error(TOKENS.errors.dbUrlUndefined);
      }
      return await MongoDbConnection.getInstance(DOCKER_DB_URL);

    case TOKENS.mongodb:
      if (!LOCAL_DB_URL) {
        throw new Error(TOKENS.errors.dbUrlUndefined);
      }
      return await MongoDbConnection.getInstance(LOCAL_DB_URL);

    case TOKENS.mysql:
      if (!DB_USERNAME || !DB_PASSWORD || !DB_NAME || !DB_HOST) {
        throw new Error(TOKENS.errors.mySqlVariablesUndefined);
      }
      return await MySqlConnection.getInstance(DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST);

    default:
      throw new Error(TOKENS.errors.dbTypeInvalid);
  }
};

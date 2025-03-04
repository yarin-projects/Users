import { TOKENS } from '../utils/tokens.utils';
import { mongoDbConnection } from './mongodb.config';
import { mySqlConncetion } from './mysql.config';

export const dbConnection = async () => {
  const { DB_URL, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST, DB_TYPE } = process.env;
  if (!DB_TYPE) {
    throw new Error(TOKENS.errors.dbTypeUndefined);
  }
  if (DB_TYPE === TOKENS.mysql) {
    if (!DB_USERNAME || !DB_PASSWORD || !DB_NAME || !DB_HOST) {
      throw new Error(TOKENS.errors.mySqlVariablesUndefined);
    }
    return await mySqlConncetion(DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST);
  } else if (DB_TYPE === TOKENS.mongodb) {
    if (!DB_URL) {
      throw new Error(TOKENS.errors.dbUrlUndefined);
    }
    return await mongoDbConnection(DB_URL);
  } else {
    throw new Error(TOKENS.errors.dbTypeInvalid);
  }
};

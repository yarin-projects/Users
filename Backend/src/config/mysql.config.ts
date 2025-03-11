import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user-sql.model';
import { TOKENS } from '../utils/tokens.utils';

export class MySqlConnection {
  private static instance: Sequelize | null = null;
  private constructor() {}
  public static async getInstance(
    name: string,
    user: string,
    password: string,
    host: string
  ): Promise<Sequelize> {
    if (!MySqlConnection.instance) {
      MySqlConnection.instance = await mySqlConncetion(name, user, password, host);
    }
    return MySqlConnection.instance;
  }
}

const mySqlConncetion = async (name: string, user: string, password: string, host: string) => {
  const sequelize = new Sequelize({
    database: name,
    username: user,
    password,
    host,
    dialect: 'mysql',
    logging: false,
    models: [User],
  });
  try {
    await sequelize.authenticate();
    console.log(TOKENS.messages.mySqlConncetionSuccess);
    await sequelize.sync({ alter: true });
    return sequelize;
  } catch (error) {
    throw new Error(TOKENS.errors.mySqlConnectionFailed + error);
  }
};

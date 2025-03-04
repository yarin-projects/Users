import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.sql.model';
import { TOKENS } from '../tokens';

export const mySqlConncetion = async (
  name: string,
  user: string,
  password: string,
  host: string
) => {
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

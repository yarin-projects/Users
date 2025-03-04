import mongoose from 'mongoose';
import { TOKENS } from '../utils/tokens.utils';

export const mongoDbConnection = async (dbUrl: string) => {
  try {
    await mongoose.connect(dbUrl);
    console.log(TOKENS.messages.mongoDbConnectionSuccess);
  } catch (error) {
    throw new Error(TOKENS.errors.mongoDbConnectionFailed + error);
  }
};

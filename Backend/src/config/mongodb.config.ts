import mongoose from 'mongoose';
import { TOKENS } from '../utils/tokens.utils';

export class MongoDbConnection {
  private static instance: typeof mongoose | null = null;
  private constructor() {}
  public static async getInstance(dbUrl: string): Promise<typeof mongoose> {
    if (!MongoDbConnection.instance) {
      MongoDbConnection.instance = await mongoDbConnection(dbUrl);
    }
    return MongoDbConnection.instance;
  }
}

const mongoDbConnection = async (dbUrl: string) => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log(TOKENS.messages.mongoDbConnectionSuccess);
    return connection;
  } catch (error) {
    throw new Error(TOKENS.errors.mongoDbConnectionFailed + error);
  }
};

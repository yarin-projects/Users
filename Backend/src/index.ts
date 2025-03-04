import { app } from './app';
import { dbConnection } from './config/db.config';
import { TOKENS } from './utils/tokens.utils';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || TOKENS.serverPort;

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error(TOKENS.errors.jwtKeyMissing);
  }
  await dbConnection();
  app.listen(PORT, () => {
    console.log(TOKENS.messages.serverRunning, PORT);
  });
};

start();

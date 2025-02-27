import express, { Application, Request, Response } from 'express';
import userRouter from './routes/user.routes';
import { TOKENS } from './tokens';

const app: Application = express();

app.use(express.json());

app.get(TOKENS.routes.default, (req: Request, res: Response) => {
  console.log(TOKENS.messages.getRoute);
  res.json({ message: TOKENS.messages.helloWorld });
});

app.use(TOKENS.routes.usersBaseUrl, userRouter);

export { app };

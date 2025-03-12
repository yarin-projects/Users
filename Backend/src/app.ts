/// <reference path="./types/global/express.d.ts" />
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes';
import { TOKENS } from './utils/tokens.utils';
import { userEventEmitter } from './events/user-event-emitter';

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [TOKENS.corsOrigin],
  })
);
app.use(cookieParser());

userEventEmitter.on(TOKENS.events.userCreated, (user) => {
  console.log(TOKENS.messages.userCreated, user);
});

app.get(TOKENS.routes.default, (req: Request, res: Response) => {
  console.log(TOKENS.messages.getRoute);
  res.json({ message: TOKENS.messages.helloWorld });
});

app.use(TOKENS.routes.usersBasePath, userRouter);

export { app };

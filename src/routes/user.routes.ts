import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { container } from '../config/inversify';
import { TOKENS } from '../tokens';

const userRouter: Router = Router();

const userController = container.get<UserController>(TOKENS.UserController);

userRouter.post(TOKENS.signUpRoute, (req: Request, res: Response) => {
  userController.signUp(req, res);
});

userRouter.post(TOKENS.loginRoute, (req: Request, res: Response) => {
  userController.login(req, res);
});

export default userRouter;

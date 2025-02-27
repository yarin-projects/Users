import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { container } from '../config/inversify';
import { TOKENS } from '../tokens';

const userRouter: Router = Router();

const userController = container.get<UserController>(TOKENS.UserController);

userRouter.post(TOKENS.routes.signUp, (req: Request, res: Response) => {
  userController.signUp(req, res);
});

userRouter.post(TOKENS.routes.login, (req: Request, res: Response) => {
  userController.login(req, res);
});

userRouter.get(TOKENS.routes.findById, (req: Request, res: Response) => {
  userController.getUser(req, res);
});

export default userRouter;

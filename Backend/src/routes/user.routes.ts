import { Router, Request, Response } from 'express';
import { UserController } from '../controllers/user.controller';
import { container } from '../config/inversify.config';
import { TOKENS } from '../utils/tokens.utils';
import { authenticateUser } from '../middlwares/auth.middleware';

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

userRouter.post(TOKENS.routes.logout, authenticateUser, (req: Request, res: Response) => {
  userController.logout(req, res);
});

userRouter.get(TOKENS.routes.me, authenticateUser, (req: Request, res: Response) => {
  userController.verifyCurrentUser(req, res);
});

userRouter.put(TOKENS.routes.update, authenticateUser, (req: Request, res: Response) => {
  userController.updateUser(req, res);
});

export default userRouter;

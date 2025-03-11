import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import IUserService from '../interfaces/user-service.interface';
import SignUpRequestDTO from '../DTOs/sign-up.dto';
import LoginRequestDTO from '../DTOs/login.dto';
import { TOKENS } from '../utils/tokens.utils';
import { handleError } from '../utils/error-handler.utils';
import { setCookie } from '../utils/cookies.utils';

@injectable()
export class UserController {
  constructor(@inject(TOKENS.IUserService) private userService: IUserService) {}
  async signUp(req: Request, res: Response) {
    try {
      const data: SignUpRequestDTO = req.body;

      const token = await this.userService.signUp(data);

      setCookie(res, token);

      return res
        .status(TOKENS.httpStatus.CREATED)
        .json({ message: TOKENS.messages.userCreated, token });
    } catch (error: any) {
      return handleError(res, error);
    }
  }
  async login(req: Request, res: Response) {
    try {
      const data: LoginRequestDTO = req.body;

      const token = await this.userService.login(data);

      setCookie(res, token);

      return res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.loginSuccess, token });
    } catch (error: any) {
      return handleError(res, error);
    }
  }
  async logout(req: Request, res: Response) {
    res.clearCookie(TOKENS.token);
    return res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.logoutSuccess });
  }
  verifyCurrentUser(req: Request, res: Response) {
    return res.status(TOKENS.httpStatus.OK).json({
      message: TOKENS.messages.userFound,
      user: { email: req.user!.email, name: req.user!.name },
    });
  }
  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await this.userService.getUserById(id);

      return res.status(TOKENS.httpStatus.OK).json({
        message: TOKENS.messages.userFound,
        user: { email: req.user!.email, name: req.user!.name },
      });
    } catch (error: any) {
      return handleError(res, error);
    }
  }
  async updateUserName(req: Request, res: Response) {
    try {
      const { id } = req.user!;
      const { name } = req.body;

      const updatedUser = await this.userService.updateUserName(id, name);

      return res.status(TOKENS.httpStatus.OK).json({
        message: TOKENS.messages.userUpdated,
        user: { email: updatedUser!.email, name: updatedUser!.name },
      });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

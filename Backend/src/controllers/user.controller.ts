import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import IUserService from '../interfaces/IUserService';
import SignUpRequestDTO from '../DTOs/signUp.dto';
import LoginRequestDTO from '../DTOs/login.dto';
import { TOKENS } from '../tokens';
import { handleError } from '../utils/error-handler';

@injectable()
export class UserController {
  constructor(@inject(TOKENS.IUserService) private userService: IUserService) {}
  async signUp(req: Request, res: Response) {
    try {
      const data: SignUpRequestDTO = req.body;

      const token = await this.userService.signUp(data);

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

      return res
        .status(TOKENS.httpStatus.OK)
        .json({ message: TOKENS.messages.loginSuccess, token });
    } catch (error: any) {
      return handleError(res, error);
    }
  }
  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await this.userService.getUser(id);

      return res.status(TOKENS.httpStatus.OK).json({ message: TOKENS.messages.userFound, user });
    } catch (error: any) {
      return handleError(res, error);
    }
  }
}

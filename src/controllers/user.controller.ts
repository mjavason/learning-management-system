import { Request, Response } from 'express';
import { Types } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  AuthFailureResponse,
  NotFoundResponse,
  ForbiddenResponse,
  BadRequestResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
  FailureMsgResponse,
  SuccessResponse,
  AccessTokenErrorResponse,
  TokenRefreshResponse,
} from '../helpers/response';
import { userService } from '../services';
import logger from '../helpers/logger';

class UserController {
  async create(req: Request, res: Response) {
    let existing_user = await userService.checkForDuplicate(req.body.username);

    //Hash password
    try {
      const saltRounds = 10; // You can adjust the number of rounds for security
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;
    } catch (error) {
      logger.error('Password hash failed');
      return InternalErrorResponse(res);
    }

    // if (existing_user) return ForbiddenResponse(res, 'User already exists');
    const data = await userService.create(req.body);

    if (!data) return InternalErrorResponse(res);

    return SuccessResponse(res, data);
  }
}

export const userController = new UserController();

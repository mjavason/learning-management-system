import { NextFunction, Request, Response } from 'express';
import { demoService } from '../services';
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
import { MESSAGES, STATUS_CODES } from '../constants';

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user;
  if (user && user.role !== 'teacher') {
    console.log('Invalid login details, not teacher');
    return AuthFailureResponse(res);
  }
  return next();
};

export default isAdmin;

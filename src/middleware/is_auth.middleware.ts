import { NextFunction, Request, Response } from 'express';
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
} from '../helpers/response'; import { verifyJwt } from '../utils/jwt';

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(' ')[1] || '';
  if (!accessToken) {
    return AccessTokenErrorResponse(res, 'invalid token');
  }
  const decoded = verifyJwt(accessToken);
  if (!decoded) {
    return AccessTokenErrorResponse(res, 'Unauthorized');
  }
  res.locals.user = decoded;
  return next();
};

export default isAuth;

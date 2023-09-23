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
  // const loggedUser = await demoService.getUserInfo(res.locals.user);
  const loggedUser = user;
  if (loggedUser && loggedUser.user_type !== 'admin') {
    //I'm stuck in a dilemma, kuz the user always gets here when they can't find a particular route. they don't need to know the admin section exists.
    // return res.status(404).send({ status_code: STATUS_CODES.FAILURE, message: MESSAGES.ROUTE_NOT_FOUND, success: false });

    return AccessTokenErrorResponse(res, "You're at the edge of creation buddy and you can't go any further. Recheck your route/api url");
  }
  return next();
};

export default isAdmin;

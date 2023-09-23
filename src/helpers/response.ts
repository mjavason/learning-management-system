import { Response } from 'express';
import { MESSAGES } from '../constants';

enum StatusCode {
  SUCCESS = '10000',
  FAILURE = '10001',
  RETRY = '10002',
  INVALID_ACCESS_TOKEN = '10003',
}

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export function AuthFailureResponse(res: Response): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ status_code: StatusCode.FAILURE, message: MESSAGES.AUTH_FAILURE, success: false });
}

export function NotFoundResponse(res: Response): Response {
  return res
    .status(ResponseStatus.NOT_FOUND)
    .send({ status_code: StatusCode.FAILURE, message: MESSAGES.NOT_FOUND, success: false });
}

export function ForbiddenResponse(res: Response, message = MESSAGES.FORBIDDEN): Response {
  return res
    .status(ResponseStatus.FORBIDDEN)
    .send({ status_code: StatusCode.FAILURE, message, success: false });
}

export function BadRequestResponse(res: Response, message = MESSAGES.BAD_PARAMETERS): Response {
  return res
    .status(ResponseStatus.BAD_REQUEST)
    .send({ status_code: StatusCode.FAILURE, message, success: false });
}

export function InternalErrorResponse(res: Response, message = MESSAGES.INTERNAL_ERROR): Response {
  return res
    .status(ResponseStatus.INTERNAL_ERROR)
    .send({ status_code: StatusCode.FAILURE, message, success: false });
}

export function SuccessMsgResponse(res: Response, message = MESSAGES.FETCHED): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ status_code: StatusCode.SUCCESS, message, success: true });
}

export function FailureMsgResponse(res: Response, message = MESSAGES.ERROR): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .send({ status_code: StatusCode.FAILURE, message, success: false });
}

export function SuccessResponse<T>(res: Response, data: T, message = MESSAGES.SUCCESSFUL): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .json({ status_code: StatusCode.SUCCESS, message, data, success: true });
}

export function AccessTokenErrorResponse(res: Response, message = MESSAGES.ACCESS_TOKEN_ERROR_RESPONSE): Response {
  return res
    .status(ResponseStatus.UNAUTHORIZED)
    .send({ status_code: StatusCode.INVALID_ACCESS_TOKEN, message, success: false });
}

export function TokenRefreshResponse(res: Response, message = MESSAGES.FETCHED, accessToken: string, refreshToken: string): Response {
  return res
    .status(ResponseStatus.SUCCESS)
    .json({ status_code: StatusCode.SUCCESS, message, access_token: accessToken, refresh_token: refreshToken, success: true });
}

import { Request, Response } from 'express';
import { Types } from 'mongoose';
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
import { userService } from '../services'

class UserController {
    async register(req: Request, res: Response) {
        let existing_user = await userService.checkForDuplicate(req.body.username);
        if (existing_user) return ForbiddenResponse(res, "User already exists")
        const data = await userService.createUser(req.body);

        if (!data) return InternalErrorResponse(res);

        return SuccessResponse(res, data);
    }
}

export const userController = new UserController();

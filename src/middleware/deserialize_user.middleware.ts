/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response, Request, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt';
import { BadRequestResponse } from '../helpers/response';

function deserializeUser(req: Request, res: Response, next: NextFunction) {
  try {
    const accessToken = req.headers.authorization?.split(' ')[1] || '';
    if (!accessToken) return next();

    const decoded = verifyJwt(accessToken);
    if (!decoded) {
      return BadRequestResponse(res, 'Invalid token')
    }else{
      res.locals.user = decoded;
    }

    return next();
  } catch (err: any) {
    // console.log(err);
  }
}

export default deserializeUser;

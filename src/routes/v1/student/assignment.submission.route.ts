import { Router, Request, Response } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { assignmentSubmissionController } from '../../../controllers';
import { assignmentSubmissionValidation } from '../../../validation';
import { SuccessMsgResponse } from '../../../helpers/response';
import { MESSAGES } from '../../../constants';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post(
  '/',
  processRequestBody(assignmentSubmissionValidation.create.body),
  assignmentSubmissionController.create,
);
export default router;

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
  '/create',
  processRequestBody(assignmentSubmissionValidation.create.body),
  assignmentSubmissionController.create,
);
router.get('/:pagination', assignmentSubmissionController.getAll);
router.get(
  '/search',
  processRequestQuery(assignmentSubmissionValidation.find.query),
  assignmentSubmissionController.find,
);
router.patch(
  '/:id',
  [
    processRequestBody(assignmentSubmissionValidation.update.body),
    processRequestParams(assignmentSubmissionValidation.update.params),
  ],
  assignmentSubmissionController.update,
);
router.delete(
  '/:id',
  [processRequestBody(assignmentSubmissionValidation.getById.params)],
  assignmentSubmissionController.delete,
);

export default router;

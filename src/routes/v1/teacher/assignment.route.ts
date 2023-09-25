import { Router, Request, Response } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { assignmentController } from '../../../controllers';
import { assignmentValidation } from '../../../validation';
import { SuccessMsgResponse } from '../../../helpers/response';
import { MESSAGES } from '../../../constants';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post(
  '/create',
  processRequestBody(assignmentValidation.create.body),
  assignmentController.create,
);
router.get('/:pagination', assignmentController.getAll);
router.get(
  '/search',
  processRequestQuery(assignmentValidation.find.query),
  assignmentController.find,
);
router.patch(
  '/:id',
  [
    processRequestBody(assignmentValidation.update.body),
    processRequestParams(assignmentValidation.update.params),
  ],
  assignmentController.update,
);
router.delete(
  '/:id',
  [processRequestBody(assignmentValidation.getById.params)],
  assignmentController.delete,
);

export default router;

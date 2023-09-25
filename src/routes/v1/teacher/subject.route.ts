import { Router, Request, Response } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { subjectController } from '../../../controllers';
import { subjectValidation } from '../../../validation';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post('/', processRequestBody(subjectValidation.create.body), subjectController.create);
router.get('/search', processRequestQuery(subjectValidation.find.query), subjectController.find);
router.get('/:pagination', subjectController.getAll);
router.patch(
  '/:id',
  [
    processRequestBody(subjectValidation.update.body),
    processRequestParams(subjectValidation.update.params),
  ],
  subjectController.update,
);
router.delete(
  '/:id',
  [processRequestParams(subjectValidation.getById.params)],
  subjectController.delete,
);

export default router;

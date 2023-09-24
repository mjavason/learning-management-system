import { Router, Request, Response } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { subjectController } from '../../../controllers';
import { subjectValidation } from '../../../validation';
import { SuccessMsgResponse } from '../../../helpers/response';
import { MESSAGES } from '../../../constants';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post('/create', processRequestBody(subjectValidation.create.body), subjectController.create);
router.get('/:pagination', subjectController.getAll);
router.get('/search', processRequestQuery(subjectValidation.find.query), subjectController.find);
router.patch(
  '/:id',
  [
    processRequestBody(subjectValidation.update.body),
    processRequestParams(subjectValidation.update.params),
  ],
  subjectController.update,
);
router.delete('/:id', [processRequestBody(subjectValidation.getById.params)]);

export default router;


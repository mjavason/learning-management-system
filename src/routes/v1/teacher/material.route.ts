import { Router, Request, Response } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { materialController } from '../../../controllers';
import { materialValidation } from '../../../validation';
import { SuccessMsgResponse } from '../../../helpers/response';
import { MESSAGES } from '../../../constants';

// router.get('/', (req: Request, res: Response) => SuccessMsgResponse(res, MESSAGES.DEFAULT));
router.post(
  '/',
  processRequestBody(materialValidation.create.body),
  materialController.create,
);
router.get('/search', processRequestQuery(materialValidation.find.query), materialController.find);
router.get('/:pagination', materialController.getAll);
router.patch(
  '/:id',
  [
    processRequestBody(materialValidation.update.body),
    processRequestParams(materialValidation.update.params),
  ],
  materialController.update,
);
router.delete(
  '/:id',
  [processRequestParams(materialValidation.getById.params)],
  materialController.delete,
);

export default router;

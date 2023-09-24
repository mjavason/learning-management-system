import { Router } from 'express';
const router = Router();

import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { userController } from '../../../controllers';
import { authValidation } from '../../../validation';

router.post('/register', processRequestBody(authValidation.register.body), userController.create);

export default router;

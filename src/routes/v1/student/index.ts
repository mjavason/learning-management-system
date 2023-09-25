import { Router } from 'express';
import assignmentSubmissionRoute from './assignment_submission.route';
import isAuth from '../../../middleware/is_auth.middleware';
const router = Router();

router.use(isAuth);
router.post('/assignment/submission', assignmentSubmissionRoute);

export default router;

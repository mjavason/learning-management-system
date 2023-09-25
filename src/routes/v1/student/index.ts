import { Router } from 'express';
import assignmentSubmissionRoute from './assignment.submission.route';
import isAuth from '../../../middleware/is_auth.middleware';
const router = Router();

router.use(isAuth);
router.use('/assignment/submission', assignmentSubmissionRoute);

export default router;

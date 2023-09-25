import { Router } from 'express';
import subjectRoute from './subject.route';
import assignmentRoute from './assignment.route';
import assignmentSubmissionRoute from './assignment.submission.route';
import materialRoute from './material.route';
import isTeacher from '../../../middleware/is_teacher.middleware';
const router = Router();

router.use(isTeacher);
router.use('/assignment/submission', assignmentSubmissionRoute);
router.use('/assignment', assignmentRoute);
router.use('/material', materialRoute);
router.use('/subject', subjectRoute);

export default router;

import { Router } from 'express';
import subjectRoute from './subject.route';
import isTeacher from '../../../middleware/is_teacher.middleware';
const router = Router();

router.use(isTeacher);
router.use('/subject', subjectRoute);

export default router;

import { Router } from 'express';
import demoRoute from './demo.route';
import isTeacher from '../../../middleware/is_teacher.middleware';
const router = Router();


router.use(isTeacher);
router.use('/demoprotected', demoRoute);


export default router;

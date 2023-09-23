import { Router } from 'express';
import publicRoute from './public';
import studentRoute from './student';
import teacherRoute from './teacher'
import adminRoute from './admin';
import { MESSAGES, STATUS_CODES } from '../../constants';

const router = Router();
router.get('/', (req, res) => {
  res.status(200).send({ status_code: STATUS_CODES.SUCCESS, message: MESSAGES.WELCOME_V1, success: false });
  console.log(MESSAGES.WELCOME_V1);
});

router.use('/', publicRoute);
router.use('/', studentRoute);
router.use('/', teacherRoute);
router.use('/', adminRoute);

export default router;

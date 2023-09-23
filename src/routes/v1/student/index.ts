import { Router } from 'express';
import demoRoute from './demo.route';
import isAuth from '../../../middleware/is_auth.middleware';
const router = Router();


router.use(isAuth);
router.use('/demoprotected', demoRoute);


export default router;

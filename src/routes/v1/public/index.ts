import express from 'express';
import authRoute from './auth.route'
import demoRoute from './demo.route';
const router = express.Router();

router.use('/auth', authRoute)
router.use('/demo', demoRoute)
export default router;

import { Router } from 'express';
import { getDashboard, resetDay } from '../controllers/dashboardController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, authorize('TEACHER','COORDINATOR'), getDashboard);
router.delete('/reset', authenticate, authorize('TEACHER','COORDINATOR'), resetDay);

export default router;

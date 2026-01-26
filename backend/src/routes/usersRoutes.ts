import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { getCoordinators, getTeachers } from '../controllers/usersController';

const router = Router();

router.get('/teachers', authenticate, authorize('COORDINATOR'), getTeachers);
router.get('/coordinators', authenticate, authorize('ADMIN'), getCoordinators);

export default router;